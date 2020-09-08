import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../country';


@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {

  title = 'Countries';
  countries: Country[];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe(countries => this.countries = countries)
  }

}
