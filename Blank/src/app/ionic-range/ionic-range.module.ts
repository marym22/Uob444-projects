import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicRangePageRoutingModule } from './ionic-range-routing.module';

import { IonicRangePage } from './ionic-range.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicRangePageRoutingModule
  ],
  declarations: [IonicRangePage]
})
export class IonicRangePageModule {}
