import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicButtonPageRoutingModule } from './ionic-button-routing.module';

import { IonicButtonPage } from './ionic-button.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicButtonPageRoutingModule
  ],
  declarations: [IonicButtonPage]
})
export class IonicButtonPageModule {}
