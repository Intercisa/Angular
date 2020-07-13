import { Component } from '@angular/core';
import { UsersServiceService } from './users-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  
  constructor(private userService: UsersServiceService){}


}
