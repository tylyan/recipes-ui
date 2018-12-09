import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../../service/user-login.service';
import { CognitoCallback } from '../../service/cognito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit, CognitoCallback {

  email: string
  password: string
  errorMessage: string

  constructor(private router: Router, private userService: UserLoginService) { }

  ngOnInit() {
  }

  onLogin() {
    if (this.email == null || this.password == null) {
      this.errorMessage = "All fields are required";
      return;
    }
    this.errorMessage = null;
    this.userService.authenticate(this.email, this.password, this);
  }

  cognitoCallback(message: string, result: any) {
    if (message != null) { //error
        this.errorMessage = message;
        console.log("result: " + this.errorMessage);
        if (this.errorMessage === 'User is not confirmed.') {
            console.log("redirecting");
            this.router.navigate(['/home/confirmRegistration', this.email]);
        } else if (this.errorMessage === 'User needs to set password.') {
            console.log("redirecting to set new password");
            this.router.navigate(['/home/newPassword']);
        }
    } else { //success
        this.router.navigate(['/browse']);
    }
  }
}
