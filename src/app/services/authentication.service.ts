import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {

  private authUrl:string;

  constructor(private httpClient:HttpClient) {
    this.authUrl = 'http://localhost:3000/auth/v1/';
  }

  authenticateUser(data) {

    return this.httpClient.post(this.authUrl,data);

  }

  setBearerToken(token) {
    localStorage.setItem('bearerToken',token);
  }

  getBearerToken() {
return localStorage.getItem('bearerToken');
  }

  isUserAuthenticated(token): Promise<any> {
    return this.httpClient.post(this.authUrl + 'isAuthenticated',{},{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    }).pipe(map(response=> response['isAuthenticated'])).toPromise();
  }
}
