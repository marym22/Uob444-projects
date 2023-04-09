import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicSegmentPageRoutingModule } from './ionic-segment-routing.module';

import { IonicSegmentPage } from './ionic-segment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSegmentPageRoutingModule
  ],
  declarations: [IonicSegmentPage]
})
export class IonicSegmentPageModule {}
