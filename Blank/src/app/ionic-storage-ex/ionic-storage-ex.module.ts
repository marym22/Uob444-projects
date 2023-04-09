import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicStorageExPageRoutingModule } from './ionic-storage-ex-routing.module';

import { IonicStorageExPage } from './ionic-storage-ex.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicStorageExPageRoutingModule
  ],
  declarations: [IonicStorageExPage]
})
export class IonicStorageExPageModule {}
