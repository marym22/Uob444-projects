import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicCardsPageRoutingModule } from './ionic-cards-routing.module';

import { IonicCardsPage } from './ionic-cards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicCardsPageRoutingModule
  ],
  declarations: [IonicCardsPage]
})
export class IonicCardsPageModule {}
