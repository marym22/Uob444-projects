import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ex3Page } from './ex3.page';

const routes: Routes = [
  {
    path: '',
    component: Ex3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ex3PageRoutingModule {}
