import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  users: string[];

  constructor(private userService:UsersServiceService ){
  }
  ngOnInit(): void {
    this.users = this.userService.inactiveUsers;
  }

  onSetToActive(id: number) {
      this.userService.setUserActive(id);
  }
}
