import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicSlidesPageRoutingModule } from './ionic-slides-routing.module';

import { IonicSlidesPage } from './ionic-slides.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSlidesPageRoutingModule
  ],
  declarations: [IonicSlidesPage]
})
export class IonicSlidesPageModule {}
