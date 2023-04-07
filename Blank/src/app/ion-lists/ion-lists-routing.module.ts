import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonListsPage } from './ion-lists.page';

const routes: Routes = [
  {
    path: '',
    component: IonListsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonListsPageRoutingModule {}
