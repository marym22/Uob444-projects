import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicTogglePage } from './ionic-toggle.page';

const routes: Routes = [
  {
    path: '',
    component: IonicTogglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicTogglePageRoutingModule {}
