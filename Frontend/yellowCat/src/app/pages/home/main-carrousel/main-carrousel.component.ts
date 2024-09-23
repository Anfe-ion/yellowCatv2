import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-carrousel',
  standalone: true,
  imports: [],
  templateUrl: './main-carrousel.component.html',
  styleUrl: './main-carrousel.component.scss'
})
export class MainCarrouselComponent {

  constructor(private router: Router){}

  group() {
    this.router.navigate(['https://www.facebook.com/groups/yellowcat'])
  }

  discount() {
    this.router.navigate(['/users/register'])
  }

  all() {
    this.router.navigate(['/ebikes/all'])
  }
}
