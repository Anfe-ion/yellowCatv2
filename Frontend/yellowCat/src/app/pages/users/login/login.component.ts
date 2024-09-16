import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private router: Router) {}

  login(){
    console.log("Logged")
  }

  facebookLogin(){
    console.log("Facebook")
  }

  googleLogin(){
    console.log("Google")
  }

  registerRedirection(){
    this.router.navigate(['users/register']);
  }
  
}
