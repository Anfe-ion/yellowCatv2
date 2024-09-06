import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  apiCountries = 'https://www.apicountries.com/countries';
  apiCities = 'https://countriesnow.space/api/v0.1/countries/population/cities';

  constructor(private http: HttpClient) { }

  getCountry(){
    return this.http.get<any[]>(this.apiCountries);
  }

  getCity(){
    return this.http.get<any[]>(this.apiCities);
  }
}
