import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ex6Page } from './ex6.page';

const routes: Routes = [
  {
    path: '',
    component: Ex6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ex6PageRoutingModule {}
