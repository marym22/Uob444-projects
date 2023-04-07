import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ex2Page } from './ex2.page';

const routes: Routes = [
  {
    path: '',
    component: Ex2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ex2PageRoutingModule {}
