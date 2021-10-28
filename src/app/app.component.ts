import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private storage: Storage, private statusbar: StatusBar) {
    this.initalApp();
  }

  async initalApp() {
    this.statusbar.styleLightContent();
    await this.storage.create();
  }
}
