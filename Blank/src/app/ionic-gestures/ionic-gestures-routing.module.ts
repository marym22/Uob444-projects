import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicGesturesPage } from './ionic-gestures.page';

const routes: Routes = [
  {
    path: '',
    component: IonicGesturesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicGesturesPageRoutingModule {}
