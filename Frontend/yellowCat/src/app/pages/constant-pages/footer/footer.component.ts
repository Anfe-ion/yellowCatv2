import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit{
  date = new Date()
  ano = this.date.getFullYear() 

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.date = new Date()
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
