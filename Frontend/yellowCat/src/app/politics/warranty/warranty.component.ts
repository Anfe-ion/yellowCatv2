import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-warranty',
  standalone: true,
  imports: [],
  templateUrl: './warranty.component.html',
  styleUrl: './warranty.component.scss'
})
export class WarrantyComponent {

  constructor(private router: Router) { }
  
  homeRed() {
    this.router.navigate(['/home'])
  }

}
