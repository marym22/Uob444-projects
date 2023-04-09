import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicTogglePageRoutingModule } from './ionic-toggle-routing.module';

import { IonicTogglePage } from './ionic-toggle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicTogglePageRoutingModule
  ],
  declarations: [IonicTogglePage]
})
export class IonicTogglePageModule {}
