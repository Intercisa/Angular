import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public username:string,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){


  }

}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  
  todos: Todo[]
  message : string
  
  /*= [

    new Todo(1,'Learn to Dance', false, new Date),
    new Todo(2,'Become an expert on Spring Boot', false, new Date),
    new Todo(3,'Master Angular', false, new Date),
    new Todo(4,'Pro Linux', false, new Date),
    new Todo(5,'Professional Docker', false, new Date),

    
    {id:1, description: 'Become an expert on Spring Boot'},
    {id:2, description: 'Become an expert on Spring Boot'},
    {id:3, description: 'Master Angular'},
    {id:4, description: 'Pro Linux'},
    {id:5, description: 'Professional Docker'}
    
  ]
  
  */
  
  
  constructor(
    private todoService:TodoDataService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.refreshTodos()
  }

  refreshTodos(){
  this.todoService.retrieveAllTodos('sipi').subscribe(
    response => {
      console.log(response)
      this.todos = response
    }
  )
  }

  deleteTodo(id){
    console.log(`delete todo ${id}`)

    this.todoService.deleteTodo('sipi', id).subscribe(
      response => {
        console.log(response)
        this.message = `Delete Successful! (id: ${id}) `
        this.refreshTodos()
      }
    )
  }

  updateTodo(id){
    console.log(`update ${id}`)
    this.router.navigate(['todos',id])
  }

  addTodo(){
    this.router.navigate(['todos',-1]) //in our app all Todo have a positive id, so this way we can show we want to creat a Todo
  }

}
