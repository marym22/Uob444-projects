import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ex6PageRoutingModule } from './ex6-routing.module';

import { Ex6Page } from './ex6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ex6PageRoutingModule
  ],
  declarations: [Ex6Page]
})
export class Ex6PageModule {}
