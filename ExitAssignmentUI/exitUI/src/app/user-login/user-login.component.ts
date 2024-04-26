import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../shared/api.service';
import { User } from '../shared/user';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user = new User();
  msg = '';
  public loginForm!: FormGroup

  username: any;
  password: any;
  invalidLogin = false
  @Input() error: string | null | undefined;
  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      uname: ['', Validators.required],
      pass: ['', Validators.required]

    })
  }

  login() {
    this.api.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log("response received");
        this.router.navigate(["display"]);
      },
      error => {
        console.log("exception received");
        this.msg = "Bad Credentials,Please enter valid emailId and Password";
      }
    )


  }
  registration() {
    this.router.navigate(["user-registration"]);

  }


  checkLogin() {
    (this.api.authenticate(this.user.username, this.user.password).subscribe(
      data => {
    
        
        this.router.navigate(['display']);
        console.log("successfull");
        
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true
        this.error = error.message;
        this.msg = "Bad Credentials,Please enter valid emailId and Password";
      }
    )
    );

  }


}
