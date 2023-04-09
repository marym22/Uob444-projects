import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicSegmentPage } from './ionic-segment.page';

const routes: Routes = [
  {
    path: '',
    component: IonicSegmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicSegmentPageRoutingModule {}
