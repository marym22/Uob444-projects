import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ex2PageRoutingModule } from './ex2-routing.module';

import { Ex2Page } from './ex2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ex2PageRoutingModule
  ],
  declarations: [Ex2Page]
})
export class Ex2PageModule {}
