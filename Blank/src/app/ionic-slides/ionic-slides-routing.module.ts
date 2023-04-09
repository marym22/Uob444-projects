import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicSlidesPage } from './ionic-slides.page';

const routes: Routes = [
  {
    path: '',
    component: IonicSlidesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicSlidesPageRoutingModule {}
