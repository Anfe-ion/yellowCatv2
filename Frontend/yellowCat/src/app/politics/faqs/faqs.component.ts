import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss'
})
export class FAQsComponent {

  constructor(private router: Router) { }
  
  homeRed() {
    this.router.navigate(['/home'])
  }

}
