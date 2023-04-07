import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicCheckboxPage } from './ionic-checkbox.page';

const routes: Routes = [
  {
    path: '',
    component: IonicCheckboxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicCheckboxPageRoutingModule {}
