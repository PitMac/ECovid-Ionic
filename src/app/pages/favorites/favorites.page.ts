import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/interfaces/interfaces';
import { DataStorageService } from '../../services/data-storage.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  constructor(public localData: DataStorageService) {}

  onClick(country: Country) {
    this.localData.removeCountry(country);
  }

  ngOnInit() {}
}
