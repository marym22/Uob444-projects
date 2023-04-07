import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicLabelPage } from './ionic-label.page';

const routes: Routes = [
  {
    path: '',
    component: IonicLabelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicLabelPageRoutingModule {}
