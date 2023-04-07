import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicListsPageRoutingModule } from './ionic-lists-routing.module';

import { IonicListsPage } from './ionic-lists.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicListsPageRoutingModule
  ],
  declarations: [IonicListsPage]
})
export class IonicListsPageModule {}
