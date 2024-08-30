import { Component } from '@angular/core';
import { MenuComponent } from "./menu/menu.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  menuVisible: boolean = false;

  constructor(private router: Router){}

  homeRed(){
    this.router.navigate(['/home'])
  }

  loginRed(){
    this.router.navigate(['/login'])
  }

  seeMenu(){
    this.menuVisible = !this.menuVisible;
  }
}