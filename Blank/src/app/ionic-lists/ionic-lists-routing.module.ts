import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicListsPage } from './ionic-lists.page';

const routes: Routes = [
  {
    path: '',
    component: IonicListsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicListsPageRoutingModule {}
