import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];
  
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]), // we wrapping in '' the username for make sure angular will pick this up as a name of a controll
          // only send the refrence of the validator angular will call if /and when it needs to be called
        'email': new FormControl(null,[Validators.required, Validators.email], this.forbiddenEmails)
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });  
    //this.signupForm.valueChanges.subscribe((value)=>{
    //  console.log(value);
   // })
   // this.signupForm.statusChanges.subscribe((status)=>{
     // console.log(status);
    //})

    this.signupForm.setValue({
      'userData' :{
        'username': 'David',
        'email': 'david@test.com'
      },
      'gender': 'male',
      'hobbies': []
    });

    this.signupForm.patchValue({
      'userData' :{
        'username': 'Mark',
        'email': 'david@test.com'
      }
    });

  }

  
  
  onSubmit(){
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  onAddHobby(){
    (<FormArray>this.signupForm.get('hobbies')).push(new FormControl(null, Validators.required));
  }

  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  // custom validator 
  forbiddenNames(control: FormControl): {[s: string]:boolean}{
    if(this.forbiddenUsernames.indexOf(control.value) !== -1){
      return {'nameIsForbidden': true}
    }
      return null; // if validation is successful you have to pass null or nothing and never {'nameIsForbidden': false}
  }

    //async validator
  forbiddenEmails(control: FormControl) : Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve, reject)=>{
      setTimeout(()=>{
        if(control.value === 'test@test.com'){
          resolve({'emailisForbidded':true})
        }else {
          resolve(null)
        }
      }, 1500);
    });
      return promise;
  }

}
