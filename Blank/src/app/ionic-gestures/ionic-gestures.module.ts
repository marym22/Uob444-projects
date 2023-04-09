import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicGesturesPageRoutingModule } from './ionic-gestures-routing.module';

import { IonicGesturesPage } from './ionic-gestures.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicGesturesPageRoutingModule
  ],
  declarations: [IonicGesturesPage]
})
export class IonicGesturesPageModule {}
