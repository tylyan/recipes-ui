import {Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {UserRegisterService} from "../../service/user-register.service";
import {UserLoginService} from "../../service/user-login.service";
import {LoggedInCallback} from "../../service/cognito.service";

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html'
})
export class ConfirmComponent implements OnInit, OnDestroy {
  confirmationCode: string;
  email: string;
  errorMessage: string;
  private sub: any;

  constructor(public regService: UserRegisterService, public router: Router, public route: ActivatedRoute) {
  }

  ngOnInit() {
      this.route.params.subscribe(params => {
          this.email = params['username'];
      });

      this.errorMessage = null;
  }

  ngOnDestroy() {
      // this.sub.unsubscribe();
  }

  onConfirmRegistration() {
      this.errorMessage = null;
      this.regService.confirmRegistration(this.email, this.confirmationCode, this);
  }

  cognitoCallback(message: string, result: any) {
      if (message != null) { //error
          this.errorMessage = message;
          console.log("message: " + this.errorMessage);
      } else { //success
          //move to the next step
          console.log("Moving to browse");
          // this.configs.curUser = result.user;
          this.router.navigate(['/browse']);
      }
  }
}