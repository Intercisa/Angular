import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultMail:string = 'example@example.com';
  defaultSubscription = 'Advanced';
  @ViewChild('f') subsForm: NgForm;
    subs = {
      email: '',
      subscription: '',
      password: ''
    }

    subscription= ['Basic', 'Advanced', 'Pro' ];

  onSubmit(){
    this.subs.email = this.subsForm.value.userData.email;
    this.subs.subscription = this.subsForm.value.userData.subscriptions;
    this.subs.password = this.subsForm.value.userData.password;

    console.log(this.subs);

  }


}
