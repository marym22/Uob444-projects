import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ex4PageRoutingModule } from './ex4-routing.module';

import { Ex4Page } from './ex4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ex4PageRoutingModule
  ],
  declarations: [Ex4Page]
})
export class Ex4PageModule {}
