import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicSearchbarPage } from './ionic-searchbar.page';

const routes: Routes = [
  {
    path: '',
    component: IonicSearchbarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicSearchbarPageRoutingModule {}
