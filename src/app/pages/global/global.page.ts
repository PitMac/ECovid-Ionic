import { Component, OnInit } from '@angular/core';
import { CovidService } from '../../services/covid.service';
import { Global } from '../../interfaces/interfaces';

@Component({
  selector: 'app-global',
  templateUrl: './global.page.html',
  styleUrls: ['./global.page.scss'],
})
export class GlobalPage implements OnInit {
  global: Global;
  newConfirmed;
  totalConfirmed;
  newDeaths;
  totalDeaths;
  newRecovered;
  totalRecovered;
  constructor(private covidService: CovidService) {}

  ngOnInit() {
    this.covidService.getGlobal().subscribe((res) => {
      this.global = res.Global;
      this.newConfirmed = this.global.NewConfirmed;
      this.totalConfirmed = this.global.TotalConfirmed;
      this.newDeaths = this.global.NewDeaths;
      this.totalDeaths = this.global.TotalDeaths;
      this.newRecovered = this.global.NewRecovered;
      this.totalRecovered = this.global.TotalRecovered;
    });
  }

  getCovid() {}
}
