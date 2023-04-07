import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicAlertExPage } from './ionic-alert-ex.page';

const routes: Routes = [
  {
    path: '',
    component: IonicAlertExPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicAlertExPageRoutingModule {}
