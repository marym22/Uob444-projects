import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicLabelPageRoutingModule } from './ionic-label-routing.module';

import { IonicLabelPage } from './ionic-label.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicLabelPageRoutingModule
  ],
  declarations: [IonicLabelPage]
})
export class IonicLabelPageModule {}
