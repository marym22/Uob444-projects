import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicCardsPage } from './ionic-cards.page';

const routes: Routes = [
  {
    path: '',
    component: IonicCardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicCardsPageRoutingModule {}
