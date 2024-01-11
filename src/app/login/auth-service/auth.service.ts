import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public username: string | undefined;
  public password: string | undefined;

  private apiUrl = 'http://localhost:8080';


  constructor(private http: HttpClient) { }

  login(username?: string, password?: string) {
    console.log("On entre dans le login coté Service");
    const url = `${this.apiUrl}/login_user`;
    const credentials = { username, password, role: 'USER' };

    return this.http.post(url, credentials, { observe: 'response' }).pipe(
      map((response) => {
        const body = response.body;

        this.username = username;
        this.password = password;
        this.registerSuccessfulLogin(username, password);
      }),
      catchError(error => {
        // Traitement de l'erreur en cas d'échec d'authentification
        console.log(error);
        if (error.status === 401) {
          // Retournez un observable avec un message d'erreur
          return throwError(() => new Error('Authentication failed. Incorrect username or password.'));
        }
        return throwError(() => error);
      })

    );
  }

  createBasicAuthToken(username?: string, password?: string) {
    return 'Basic ' + window.btoa(username + ":" + password);
  }

  registerSuccessfulLogin(username?: string, password?: string) {
    // save the username to session
  }
}
