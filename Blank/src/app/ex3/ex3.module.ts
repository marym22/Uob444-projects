import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ex3PageRoutingModule } from './ex3-routing.module';

import { Ex3Page } from './ex3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ex3PageRoutingModule
  ],
  declarations: [Ex3Page]
})
export class Ex3PageModule {}
