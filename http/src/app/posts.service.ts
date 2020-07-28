import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { map, catchError, tap } from 'rxjs/operators'
import { Subject, throwError } from 'rxjs';
import {API_URL} from './app.constants';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  error = new Subject<string>();
  

  constructor(private http:HttpClient) { }

  createAndStorePost(title: string, content:string){
    const postData:Post = {
      title,
      content
    }

    this.http
    .post<{name: string}>(
      API_URL,
      postData,
      {
        observe: 'response' // body is default if you only need the body, than you don't need this object
      }
    )
    .subscribe(responseData => {
      console.log(responseData);
    }, error =>{
      this.error.next(error.message);
    });
  }

  deletePosts(){
    return this.http
      .delete(API_URL,
        {
          observe: 'events'
          //responseType: 'text' // default json
        }  
      ).pipe(tap(event=>{
          console.log(event)
          if(event.type === HttpEventType.Response)
            console.log(event.body);
      }));
  }

  fetchPosts(){
   let searchParams = new HttpParams();
   searchParams = searchParams.append('print', 'pretty') // becasue searchParams are immutable 
   searchParams = searchParams.append('custom', 'key');

   return this.http // alternatively we can make a subject abdd pass that with next()
    .get<{ [key: string]:Post }>(API_URL, // [key:string] -> placeholder for a key which is a string type
      {
        headers: new HttpHeaders({'Custom-Header': 'Hello'}),
        params: new HttpParams().set('print','pretty')
        // params : searchParams // if you need more params 
      }
      ) 
    .pipe(
      map(responseData => { 
      const postArray: Post[] = [];
      for (const key in responseData){
        if(responseData.hasOwnProperty(key))
        postArray.push({ ...responseData[key], id: key })
      }
      return postArray;
    }), catchError(errorRes => {
      // send to analytics
      return throwError(errorRes);
    })
    );
  }
}
