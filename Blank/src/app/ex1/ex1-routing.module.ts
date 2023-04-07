import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ex1Page } from './ex1.page';

const routes: Routes = [
  {
    path: '',
    component: Ex1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ex1PageRoutingModule {}
