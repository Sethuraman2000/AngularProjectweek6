import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ServicesService } from '../services/services.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user=new User();
  msg='';
  mithresh: any;
  loginService: any;
  deleteMessage: any;

  constructor(private _service:ServicesService,private _router:Router) { }

  ngOnInit(): void {
  }
  loginUser(){
    this._service.logInUserFromRemote(this.user).subscribe(
    data=>{
      console.log("Response Received");
      this._router.navigate(['/form-demo'])
    },
    error=>{
      console.log("Exception Occured");
      this.msg="Wrong Credentials! Please Enter Correct UserName And Password";
    }
    )
     
  }
  

}



