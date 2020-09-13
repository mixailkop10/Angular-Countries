import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../country';


@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {

  title = '1st Angular Assignement';
  countries: Country[];
  divEU = document.getElementById('EU');
  divAS = document.getElementById('AS');
  divAM = document.getElementById('AM');
  divAF = document.getElementById('AF');
  divOC = document.getElementById('OC');

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe(countries => this.countries = countries)
  }

  changeRegion(): void{
    this.countries
  }
  //αυτος ο τροπος δουλευει αριστα ενω ο απο κατω οχι 
  showDivEurope(): void {
    const div = document.getElementById('EU');
    div.style.display = "block";
    const div2 = document.getElementById('AS');
    div2.style.display = "none";
    const div3= document.getElementById('AM');
    div3.style.display = "none";
    const div4 = document.getElementById('AF');
    div4.style.display = "none";
    const div5 = document.getElementById('OC');
    div5.style.display = "none";
  }

  showDivAsia(): void {
    const div = document.getElementById('EU');
    div.style.display = "none";
    const div2 = document.getElementById('AS');
    div2.style.display = "block";
    const div3= document.getElementById('AM');
    div3.style.display = "none";
    const div4 = document.getElementById('AF');
    div4.style.display = "none";
    const div5 = document.getElementById('OC');
    div5.style.display = "none";
  }

  showDivAmerica(): void {
    const div = document.getElementById('EU');
    div.style.display = "none";
    const div2 = document.getElementById('AS');
    div2.style.display = "none";
    const div3= document.getElementById('AM');
    div3.style.display = "block";
    const div4 = document.getElementById('AF');
    div4.style.display = "none";
    const div5 = document.getElementById('OC');
    div5.style.display = "none";
  }

  showDivAfrica(): void {
    const div = document.getElementById('EU');
    div.style.display = "none";
    const div2 = document.getElementById('AS');
    div2.style.display = "none";
    const div3= document.getElementById('AM');
    div3.style.display = "none";
    const div4 = document.getElementById('AF');
    div4.style.display = "block";
    const div5 = document.getElementById('OC');
    div5.style.display = "none";
  }

  showDivOceania(): void {
    const div = document.getElementById('EU');
    div.style.display = "none";
    const div2 = document.getElementById('AS');
    div2.style.display = "none";
    const div3= document.getElementById('AM');
    div3.style.display = "none";
    const div4 = document.getElementById('AF');
    div4.style.display = "none";
    const div5 = document.getElementById('OC');
    div5.style.display = "block";
  }

}
