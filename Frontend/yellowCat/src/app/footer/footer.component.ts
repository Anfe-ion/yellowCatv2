import { Component, OnInit } from '@angular/core';

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

  ngOnInit(): void {
    this.date = new Date()
  }
}
