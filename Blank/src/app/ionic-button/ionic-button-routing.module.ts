import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicButtonPage } from './ionic-button.page';

const routes: Routes = [
  {
    path: '',
    component: IonicButtonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicButtonPageRoutingModule {}
