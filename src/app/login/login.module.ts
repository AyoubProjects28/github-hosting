import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginUserComponent } from './login-user/login-user.component';
import { LoginSellerComponent } from './login-seller/login-seller.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthService } from './auth-service/auth.service';

const loginRoute: Routes = [
  { path: 'log_in_user', component: LoginUserComponent },
  { path: 'log_in_seller', component: LoginSellerComponent }
];


@NgModule({
  declarations: [
    LoginUserComponent,
    LoginSellerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoute),
    FormsModule,
    FontAwesomeModule
  ],
  providers: [AuthService],
})
export class LoginModule { }
export { AuthService };

