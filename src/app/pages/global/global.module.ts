import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { GlobalPageRoutingModule } from './global-routing.module';

import { GlobalPage } from './global.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlobalPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [GlobalPage],
})
export class GlobalPageModule {}
