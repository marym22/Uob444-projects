import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicFabsPage } from './ionic-fabs.page';

const routes: Routes = [
  {
    path: '',
    component: IonicFabsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicFabsPageRoutingModule {}
