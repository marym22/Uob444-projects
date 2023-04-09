import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicDatetimePageRoutingModule } from './ionic-datetime-routing.module';

import { IonicDatetimePage } from './ionic-datetime.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicDatetimePageRoutingModule
  ],
  declarations: [IonicDatetimePage]
})
export class IonicDatetimePageModule {}
