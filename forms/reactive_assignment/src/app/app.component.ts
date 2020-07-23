import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  projectForm:FormGroup;
  forbiddenNames = ['test'];
  
  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectData': new FormGroup({
        'projectName':new FormControl('project name', [Validators.required], this.forbiddenNameAsync),
        'email': new FormControl('example@example.com',[Validators.required, Validators.email])
      }),
      'status': new FormControl('critical')
    });
  }
  
  
  onSubmit(){
    console.log(this.projectForm);
  }

  // custom validator 
  forbiddenProjectNames(control: FormControl): {[s: string]:boolean}{
    if(this.forbiddenNames.indexOf(control.value) !== -1){
      return {'nameIsForbidden': true}
    }
      return null; // if validation is successful you have to pass null or nothing and never {'nameIsForbidden': false}
  }

   //async validator
   forbiddenNameAsync(control: FormControl) : Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve, reject)=>{
      setTimeout(()=>{
        if(control.value === 'test'){
          resolve({'nameIsForbidden':true})
        }else {
          resolve(null)
        }
      }, 1500);
    });
      return promise;
  }

}
