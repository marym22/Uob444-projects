import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicSearchbarPageRoutingModule } from './ionic-searchbar-routing.module';

import { IonicSearchbarPage } from './ionic-searchbar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSearchbarPageRoutingModule
  ],
  declarations: [IonicSearchbarPage]
})
export class IonicSearchbarPageModule {}
