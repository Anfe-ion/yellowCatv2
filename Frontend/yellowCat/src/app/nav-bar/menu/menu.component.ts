import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  spanish: boolean = false;

  constructor(private router: Router){}

  homeRed(){
    this.router.navigate(['/home'])
  }

  usersRed(){
    this.router.navigate(['/users'])
  }

  spanishSwitch() {
    this.spanish = !this.spanish;
  }

  toggleMenu() {
    console.log(":)")
    let submenu = document.getElementById("submenu");
    submenu?.classList.remove(".submenu");
    submenu?.classList.add(".submenu-visible")
  }
}
