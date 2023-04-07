import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonListsPageRoutingModule } from './ion-lists-routing.module';

import { IonListsPage } from './ion-lists.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonListsPageRoutingModule
  ],
  declarations: [IonListsPage]
})
export class IonListsPageModule {}
