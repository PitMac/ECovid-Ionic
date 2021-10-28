import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { Country } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  countries: Country[] = [];

  constructor(private storage: Storage, private toastCtrl: ToastController) {
    this.loadStorage();
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1500,
      position: 'top',
      color,
    });
    toast.present();
  }

  saveCountry(country: Country) {
    const exist = this.countries.find((ne) => ne.Country === country.Country);
    if (!exist) {
      this.countries.unshift(country);
      this.storage.set('favorites', this.countries);
      this.presentToast('Add to Favorites', 'light');
    } else {
      this.presentToast('Country already is in Favorite', 'light');
    }
  }

  async loadStorage() {
    const favorites = await this.storage.get('favorites');
    if (favorites) {
      this.countries = favorites;
    }
  }

  removeCountry(country: Country) {
    this.countries = this.countries.filter(
      (nw) => nw.Country !== country.Country
    );
    this.storage.set('favorites', this.countries);
    this.presentToast('Remove from Favorites', 'light');
  }
}
