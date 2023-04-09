import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ex5Page } from './ex5.page';

const routes: Routes = [
  {
    path: '',
    component: Ex5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ex5PageRoutingModule {}
