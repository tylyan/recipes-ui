import { Component, OnInit } from '@angular/core'
import { LoggedInCallback, CognitoUtil } from './service/cognito.service';
import { AwsUtil } from './service/aws.service';
import { UserLoginService } from './service/user-login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, LoggedInCallback {

  title = 'My Recipes'
  loggedIn: boolean
  constructor(private awsUtil: AwsUtil, private userService: UserLoginService, private cognito: CognitoUtil) { }

  ngOnInit() {
    this.userService.loggedIn$
      .subscribe(loggedIn => {this.loggedIn = loggedIn; console.log(this.loggedIn)})
    console.log("AppComponent: Checking if the user is already authenticated");
    this.userService.isAuthenticated(this);
  }

  isLoggedIn(message: string, isLoggedIn: boolean): void {
    console.log("AppComponent: the user is authenticated: ", isLoggedIn);
    this.userService.loggedIn$.next(isLoggedIn)
    let mythis = this;
    this.cognito.getIdToken({
        callback() {

        },
        callbackWithParam(token: any) {
            // Include the passed-in callback here as well so that it's executed downstream
            console.log("AppComponent: calling initAwsService in callback")
            mythis.awsUtil.initAwsService(null, isLoggedIn, token);
        }
    });
  }
}
