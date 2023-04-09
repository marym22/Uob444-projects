import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicRangePage } from './ionic-range.page';

const routes: Routes = [
  {
    path: '',
    component: IonicRangePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicRangePageRoutingModule {}
