import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicIconsPage } from './ionic-icons.page';

const routes: Routes = [
  {
    path: '',
    component: IonicIconsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicIconsPageRoutingModule {}
