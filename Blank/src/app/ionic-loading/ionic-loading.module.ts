import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicLoadingPageRoutingModule } from './ionic-loading-routing.module';

import { IonicLoadingPage } from './ionic-loading.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicLoadingPageRoutingModule
  ],
  declarations: [IonicLoadingPage]
})
export class IonicLoadingPageModule {}
