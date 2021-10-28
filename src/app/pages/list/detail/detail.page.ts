import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { CovidService } from 'src/app/services/covid.service';
import { DataStorageService } from '../../../services/data-storage.service';
import { Country } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataLocalService: DataStorageService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((resp) => {
      // console.log(resp);
      this.country = resp;
    });
  }
}
