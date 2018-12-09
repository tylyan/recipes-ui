import {Component} from "@angular/core";
import {UserRegisterService} from "../../service/user-register.service";
import {CognitoCallback} from "../../service/cognito.service";
import {Router} from "@angular/router";
@Component({
    selector: 'app-resend-code',
    templateUrl: './resend-code.component.html'
})
export class ResendCodeComponent implements CognitoCallback {

    email: string;
    errorMessage: string;

    constructor(public registrationService: UserRegisterService, public router: Router) {

    }

    resendCode() {
        this.registrationService.resendCode(this.email, this);
    }

    cognitoCallback(error: any, result: any) {
        if (error != null) {
            this.errorMessage = "Something went wrong...please try again";
        } else {
            this.router.navigate(['/user/confirmCode', this.email]);
        }
    }
}