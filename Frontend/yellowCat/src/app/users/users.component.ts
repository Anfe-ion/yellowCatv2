import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

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
