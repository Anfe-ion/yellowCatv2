import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  countryData: any = []
  cityData: any = []
  selectedCity: string = '';
  filteredCities: any = [];
  selectedCountry: string = '';

  constructor() { }

  ngOnInit(): void {

  }
}
