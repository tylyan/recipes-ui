import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {UserRegisterService} from "../../service/user-register.service";
import {CognitoCallback} from "../../service/cognito.service";

export class RegistrationUser {
    name: string;
    email: string;
    password: string;
}
/**
 * This component is responsible for displaying and controlling
 * the registration of the user.
 */
@Component({
    selector: 'app-user-register',
    templateUrl: './user-register.component.html'
})
export class UserRegisterComponent implements CognitoCallback {
    registrationUser: RegistrationUser;
    router: Router;
    errorMessage: string;

    constructor(public userRegistration: UserRegisterService, router: Router) {
        this.router = router;
        this.onInit();
    }

    onInit() {
        this.registrationUser = new RegistrationUser();
        this.errorMessage = null;
    }

    onRegister() {
        this.errorMessage = null;
        this.userRegistration.register(this.registrationUser, this);
    }

    cognitoCallback(message: string, result: any) {
        if (message != null) { //error
            this.errorMessage = message;
            console.log("result: " + this.errorMessage);
        } else { //success
            //move to the next step
            console.log("redirecting");
            this.router.navigate(['/user/confirmCode', result.user.username]);
        }
    }
}
