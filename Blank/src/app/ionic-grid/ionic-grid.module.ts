import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicGridPageRoutingModule } from './ionic-grid-routing.module';

import { IonicGridPage } from './ionic-grid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicGridPageRoutingModule
  ],
  declarations: [IonicGridPage]
})
export class IonicGridPageModule {}
