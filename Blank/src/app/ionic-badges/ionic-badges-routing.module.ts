import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicBadgesPage } from './ionic-badges.page';

const routes: Routes = [
  {
    path: '',
    component: IonicBadgesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicBadgesPageRoutingModule {}
