import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];
  
  constructor(private userService: UsersServiceService){}

  ngOnInit(): void {
    this.users = this.userService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.userService.setUserInActive(id);
  }
}
