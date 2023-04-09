import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicStorageExPage } from './ionic-storage-ex.page';

const routes: Routes = [
  {
    path: '',
    component: IonicStorageExPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicStorageExPageRoutingModule {}
