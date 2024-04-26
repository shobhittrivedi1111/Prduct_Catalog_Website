import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { User } from '../shared/user';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  user = new User();
  msg = '';
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }
  registerUser() {
    this.api.registerUserFromRemote(this.user).subscribe(
      data => {
        console.log("response received");
        this.msg = "Registration Successfull";
        this.router.navigate(["user-login"]);


      },
      error => {
        console.log("exception occured");
        this.msg = error.error;


      }
    )
  }
}
