import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { AuthService,users } from '../auth.service';
import { FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
 // private USR: Observable<users[]>;
  public user:users={}as users;

  LoginForm:FormGroup;
  flag=true;
  constructor(public fb:FormBuilder,public d:AuthService){ 
    this.LoginForm=fb.group({
      userUserName:['', Validators.compose([Validators.required,
        Validators.pattern('[a-zA-Z0-9]*'), Validators.minLength(5), Validators.maxLength(30)])],
    
     Email:['',Validators.compose([Validators.required,
       Validators.email
       //pattern('[a-zA-Z0-9._%+-]*+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/')
     ])],
     password:['', Validators.compose([Validators.required, Validators.minLength(8),Validators.pattern('[a-zA-Z0-9]*')
    ,Validators.minLength(8), Validators.maxLength(30)])],
    cpass: ['', [Validators.required]]
    });
  }
  ngOnInit() {}

  signup(){
    if(this.LoginForm.valid){
      this.user.UserName=this.LoginForm.controls['userUserName'].value;
      this.user.Email=this.LoginForm.controls['Email'].value;
      this.user.password=this.LoginForm.controls['password'].value;
      this.user.confirmpass=this.LoginForm.controls['cpass'].value;
   this.d.signup(this.LoginForm.controls['Email'].value,this.LoginForm.controls['password'].value,this.user);
}
}
}
