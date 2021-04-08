import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LoginUser } from '../LoginUser';
import { AuthenticationService } from '../services/authentication.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
    submitMessage:string;
    loginuser:LoginUser;
    username = new FormControl();
    password = new FormControl();
    constructor(private routerService: RouterService,private authService: AuthenticationService){
      this.submitMessage='';
      this.loginuser = new LoginUser;
    }
    ngOnInit():void{}

    loginSubmit() {
      this.submitMessage = '';
      this.loginuser.username = this.username.value;
      this.loginuser.password = this.password.value;
      this.authService.authenticateUser(this.loginuser).subscribe(
        resp =>{
          this.authService.setBearerToken(resp['token']);
          this.routerService.routeToDashboard();
        },error=>{
          this.submitMessage = error.message;
          if(error.status == 403){
            this.submitMessage = 'Unauthorized';
          }else{
            this.submitMessage = 'Http failure response for http://localhost:3000/auth/v1: 404 Not Found'
          }
        }
      )
    }
}
