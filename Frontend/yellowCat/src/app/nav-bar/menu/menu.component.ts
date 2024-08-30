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

  constructor(private router: Router) { }

  spanishSwitch() {
    this.spanish = !this.spanish;
  }

  toggleMenu() {
    console.log(":)")
    let submenu = document.getElementById("submenu");
    submenu?.classList.remove(".submenu");
    submenu?.classList.add(".submenu-visible")
  }

  homeRed() {
    this.router.navigate(['/home'])
  }
  
  roadRed() {
    this.router.navigate(['ebikes/road'])
  }

  gravelRed() {
    this.router.navigate(['ebikes/gravel'])
  }

  cityRed() {
    this.router.navigate(['ebikes/city'])
  }

  mountainRed() {
    this.router.navigate(['ebikes/mountain'])
  }

  allEbikesRed() {
    this.router.navigate(['ebikes/all'])
  }

  helmetsRed() {
    this.router.navigate(['accessories/helmets'])
  }

  partsRed() {
    this.router.navigate(['accessories/parts'])
  }

  clothesRed() {
    this.router.navigate(['accessories/clothes'])
  }

  allAccessoriesRed() {
    this.router.navigate(['accessories/all'])
  }

  cartRed() {
    this.router.navigate(['cart'])
  }

  discountsRed() {
    this.router.navigate(['discounts'])
  }

  loginRed() {
    this.router.navigate(['users/login'])
  }

  signUpRed() {
    this.router.navigate(['users/register'])
  }

  contactRed() {
    this.router.navigate(['politics/contact'])
  }

  FAQsRed() {
    this.router.navigate(['politics/FAQs'])
  }

  warrantyRed() {
    this.router.navigate(['politics/warranty'])
  }


}
