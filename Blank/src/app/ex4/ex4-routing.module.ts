import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ex4Page } from './ex4.page';

const routes: Routes = [
  {
    path: '',
    component: Ex4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ex4PageRoutingModule {}
