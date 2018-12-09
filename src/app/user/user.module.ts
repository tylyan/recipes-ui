import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component'
import { RouterModule } from '@angular/router';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ForgotPasswordStep1Component, ForgotPasswordStep2Component } from './forgot-password/forgot-password.component';
import { ResendCodeComponent } from './resend-code/resend-code.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    UserRoutingModule
  ],
  declarations: [
    UserLoginComponent,
    UserComponent,
    UserRegisterComponent,
    ConfirmComponent,
    ForgotPasswordStep1Component,
    ForgotPasswordStep2Component,
    ResendCodeComponent
  ]
})
export class UserModule { }
