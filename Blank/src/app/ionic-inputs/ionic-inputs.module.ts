import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicInputsPageRoutingModule } from './ionic-inputs-routing.module';

import { IonicInputsPage } from './ionic-inputs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicInputsPageRoutingModule
  ],
  declarations: [IonicInputsPage]
})
export class IonicInputsPageModule {}
