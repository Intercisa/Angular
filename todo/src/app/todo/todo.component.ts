import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number
  todo: Todo

  constructor(
    private todoService:TodoDataService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.id =  this.route.snapshot.params['id']
    this.todo = new Todo(this.id,'sipi','', false, new Date()) //initial todo (dummy-todo or default todo) needs this because of the asynchronous subscribe call 
    
    if(this.id != -1){ //if it is a new Todo you do not have to call this method 
    this.todoService.retriveTodo('sipi', this.id).subscribe(
      data => this.todo = data
    )
    }
  }

  saveTodo(){
    if(this.id === -1){ //if it is a new Todo you do not have to call this method 
      //create todo
      this.todoService.createTodo('sipi', this.todo).subscribe(
        data =>{
          console.log(data)
          this.router.navigate(['todos'])
        }
      )
    
    }else{
    this.todoService.updateTodo('sipi', this.id, this.todo).subscribe(
      data =>{ 
        console.log(data)
        this.router.navigate(['todos'])
      }
    )
    }
  }

}
