import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service/auth.service';

@Component({
  selector: 'app-login-seller',
  templateUrl: './login-seller.component.html',
  styleUrls: ['./login-seller.component.css']
})
export class LoginSellerComponent implements OnInit {

  username: string | undefined;
  password: string | undefined;
  errorMessage: string | undefined;
  successMessage: string | undefined;
  invalidLogin: boolean | undefined;
  loginSuccess: boolean | undefined;

  constructor(private authService: AuthService) { }


  ngOnInit(): void {
    this.invalidLogin = false;
    this.loginSuccess = false;
    this.errorMessage = 'Invalid Credentials'
  }

  handleLogin() {
    this.authService.login(this.username, this.password).subscribe((result) => {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful';
      // redirect to main page
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });
  }
}
