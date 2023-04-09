import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicRadioPage } from './ionic-radio.page';

const routes: Routes = [
  {
    path: '',
    component: IonicRadioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicRadioPageRoutingModule {}
