import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicRadioPageRoutingModule } from './ionic-radio-routing.module';

import { IonicRadioPage } from './ionic-radio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicRadioPageRoutingModule
  ],
  declarations: [IonicRadioPage]
})
export class IonicRadioPageModule {}
