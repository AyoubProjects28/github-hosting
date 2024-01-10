import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  username: string | undefined;
  password: string | undefined;
  errorMessage: string | undefined;
  successMessage: string | undefined;
  invalidLogin: boolean | undefined;
  loginSuccess: boolean | undefined;

  constructor(private authService: AuthService, private router: Router) { }


  ngOnInit(): void {
    this.invalidLogin = false;
    this.loginSuccess = false;
  }

  handleLogin() {
    console.log("On entre dans le handleLogin coté TS");
    this.authService.login(this.username, this.password).subscribe((result) => {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful';
      // Redirection vers la page /home
      this.router.navigate(['/home']);
    },
      error => {
        // Gestion du message d'erreur
        console.log(error);
        this.errorMessage = "Username or password uncorrect";
      },
      () => {
        this.invalidLogin = true;
        this.loginSuccess = false;
      });
  }

}
