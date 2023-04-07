import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ex1PageRoutingModule } from './ex1-routing.module';

import { Ex1Page } from './ex1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ex1PageRoutingModule
  ],
  declarations: [Ex1Page]
})
export class Ex1PageModule {}
