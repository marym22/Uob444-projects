import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicCheckboxPageRoutingModule } from './ionic-checkbox-routing.module';

import { IonicCheckboxPage } from './ionic-checkbox.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicCheckboxPageRoutingModule
  ],
  declarations: [IonicCheckboxPage]
})
export class IonicCheckboxPageModule {}
