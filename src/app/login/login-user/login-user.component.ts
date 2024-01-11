import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

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

      this.errorMessage !== undefined && (this.errorMessage = undefined);

      // Redirection vers la page /home
      this.router.navigate(['/home']);
    },
      (error) => {

        console.log(error);
        if (error instanceof Error) {
          // Erreur générée localement (par exemple, lors de la création d'une nouvelle erreur avec throwError)
          this.errorMessage = error.message;
        } else if (error.status === 401) {
          // Erreur HTTP avec statut 401 (Unauthorized)
          this.errorMessage = 'Authentication failed. Incorrect username or password.';
        } else if (error instanceof HttpErrorResponse && error.status === 200) {
          // Erreur HTTP avec statut 200 mais échec de l'analyse JSON
          this.errorMessage = 'Server response parsing error. Authentication successful for USER.';
        } else {
          // Autre type d'erreur
          this.errorMessage = 'An unexpected error occurred.';
        }

      },
      () => {
        this.invalidLogin = true;
        this.loginSuccess = false;
      });
  }

}
