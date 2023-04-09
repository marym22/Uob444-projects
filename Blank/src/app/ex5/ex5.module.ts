import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ex5PageRoutingModule } from './ex5-routing.module';

import { Ex5Page } from './ex5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ex5PageRoutingModule
  ],
  declarations: [Ex5Page]
})
export class Ex5PageModule {}
