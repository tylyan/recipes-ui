import { Component, Input } from '@angular/core';
import { UserLoginService } from '../service/user-login.service';
import { Callback, CognitoUtil } from '../service/cognito.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements Callback {

  @Input()
  private loggedIn: boolean

  constructor(private userService: UserLoginService, private cognito: CognitoUtil) { }

  onLogout() {
    this.userService.logout()
  }

  logToken() {
    console.log("Access Token: ")
    this.cognito.getAccessToken(this)
    console.log("Id Token: ")
    this.cognito.getIdToken(this)
  }
  callback(): void {

  }

  callbackWithParam(result: any): void {
    console.log(result)
  }
}
