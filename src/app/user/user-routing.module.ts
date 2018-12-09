import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { UserLoginComponent } from './user-login/user-login.component';
import { UserComponent } from './user/user.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ForgotPasswordStep1Component, ForgotPasswordStep2Component } from './forgot-password/forgot-password.component';
import { ResendCodeComponent } from './resend-code/resend-code.component';


const routes: Routes = [
	{
        path: '',
        component: UserComponent,
        children: [
            {path: '', redirectTo: 'login', pathMatch: 'full'},
            {path: 'login', component: UserLoginComponent},
            {path: 'register', component: UserRegisterComponent},
            {path: 'confirmCode/:username', component: ConfirmComponent},
            {path: 'forgotPassword', component: ForgotPasswordStep1Component},
            {path: 'forgotPassword/:email', component: ForgotPasswordStep2Component},
            {path: 'resendCode', component: ResendCodeComponent}
        ]
    }
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [ RouterModule ],
	providers: []
})
export class UserRoutingModule { }