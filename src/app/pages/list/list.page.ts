import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/interfaces/interfaces';
import { CovidService } from 'src/app/services/covid.service';
import { DataStorageService } from 'src/app/services/data-storage.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  countries: Country[] = [];
  filteredCountries: Country[] = [];
  searchText = '';

  constructor(
    private covidService: CovidService,
    private dataLocalService: DataStorageService
  ) {}

  onClick(country: Country) {
    this.dataLocalService.saveCountry(country);
  }

  searchCountry() {
    this.filteredCountries = this.countries.filter((country) =>
      country.Country.toLowerCase().includes(
        this.searchText.toLocaleLowerCase()
      )
    );
  }

  ngOnInit() {
    this.covidService.getGlobal().subscribe((resp) => {
      this.countries = resp.Countries;
      this.filteredCountries = resp.Countries;
    });
  }
}
