import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicDatetimePage } from './ionic-datetime.page';

const routes: Routes = [
  {
    path: '',
    component: IonicDatetimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicDatetimePageRoutingModule {}
