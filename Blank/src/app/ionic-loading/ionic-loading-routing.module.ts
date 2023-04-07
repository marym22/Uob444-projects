import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicLoadingPage } from './ionic-loading.page';

const routes: Routes = [
  {
    path: '',
    component: IonicLoadingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicLoadingPageRoutingModule {}
