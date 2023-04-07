import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicBadgesPageRoutingModule } from './ionic-badges-routing.module';

import { IonicBadgesPage } from './ionic-badges.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicBadgesPageRoutingModule
  ],
  declarations: [IonicBadgesPage]
})
export class IonicBadgesPageModule {}
