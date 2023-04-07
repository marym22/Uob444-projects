import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicIconsPageRoutingModule } from './ionic-icons-routing.module';

import { IonicIconsPage } from './ionic-icons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicIconsPageRoutingModule
  ],
  declarations: [IonicIconsPage]
})
export class IonicIconsPageModule {}
