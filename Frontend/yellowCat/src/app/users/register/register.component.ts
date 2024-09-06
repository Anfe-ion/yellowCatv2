import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries/countries.service';
import { FormsModule } from '@angular/forms'; 

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

  constructor(
    public countriesService: CountriesService) { }

  ngOnInit(): void {

    this.countriesService.getCountry().subscribe(data => {
      this.countryData = data
    })

    this.countriesService.getCity().subscribe(data => {
      this.cityData = data
      this.cityData = this.cityData.data
    })
  }
}
