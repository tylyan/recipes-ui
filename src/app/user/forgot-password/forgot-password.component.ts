import {Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {UserLoginService} from "../../service/user-login.service";
import {CognitoCallback} from "../../service/cognito.service";
import { Location } from "@angular/common";

@Component({
    selector: 'app-forgot-password-step-1',
    templateUrl: './forgot-password-step-1.component.html'
})
export class ForgotPasswordStep1Component implements CognitoCallback {
    email: string;
    errorMessage: string;

    constructor(public router: Router,
                public userService: UserLoginService) {
        this.errorMessage = null;
    }

    onNext() {
        this.errorMessage = null;
        this.userService.forgotPassword(this.email, this);
    }

    cognitoCallback(message: string, result: any) {
        if (message == null && result == null) { //error
            this.router.navigate(['/user/forgotPassword', this.email]);
        } else { //success
            this.errorMessage = message;
        }
    }
}

@Component({
    selector: 'forgot-password-step-2',
    templateUrl: './forgot-password-step-2.component.html'
})
export class ForgotPasswordStep2Component implements CognitoCallback, OnInit, OnDestroy {

    verificationCode: string;
    email: string;
    password: string;
    errorMessage: string;
    private sub: any;

    constructor(
      public router: Router,
      public route: ActivatedRoute,
      public userService: UserLoginService,
      private location: Location) {
        console.log("email from the url: " + this.email);
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.email = params['email'];

        });
        this.errorMessage = null;
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onNext() {
        this.errorMessage = null;
        this.userService.confirmNewPassword(this.email, this.verificationCode, this.password, this);
    }

    cognitoCallback(message: string) {
        if (message != null) { //error
            this.errorMessage = message;
            console.log("result: " + this.errorMessage);
        } else { //success
            this.router.navigate(['/user/login']);
        }
    }

    back(): void {
      this.location.back()
    }
}