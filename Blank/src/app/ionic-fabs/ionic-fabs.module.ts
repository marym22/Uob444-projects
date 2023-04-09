import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicFabsPageRoutingModule } from './ionic-fabs-routing.module';

import { IonicFabsPage } from './ionic-fabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicFabsPageRoutingModule
  ],
  declarations: [IonicFabsPage]
})
export class IonicFabsPageModule {}
