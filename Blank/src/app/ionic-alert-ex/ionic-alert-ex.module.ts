import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicAlertExPageRoutingModule } from './ionic-alert-example-routing.module';

import { IonicAlertExPage } from './ionic-alert-ex.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicAlertExPageRoutingModule
  ],
  declarations: [IonicAlertExPage]
})
export class IonicAlertExPageModule {}
