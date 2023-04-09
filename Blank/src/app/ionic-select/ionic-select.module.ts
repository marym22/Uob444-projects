import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicSelectPageRoutingModule } from './ionic-select-routing.module';

import { IonicSelectPage } from './ionic-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSelectPageRoutingModule
  ],
  declarations: [IonicSelectPage]
})
export class IonicSelectPageModule {}
