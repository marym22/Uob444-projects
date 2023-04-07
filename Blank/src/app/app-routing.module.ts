import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ionic-inputs',
    loadChildren: () => import('./ionic-inputs/ionic-inputs.module').then( m => m.IonicInputsPageModule)
  },
  {
    path: 'ionic-label',
    loadChildren: () => import('./ionic-label/ionic-label.module').then( m => m.IonicLabelPageModule)
  },
  {
    path: 'ionic-button',
    loadChildren: () => import('./ionic-button/ionic-button.module').then( m => m.IonicButtonPageModule)
  },
  {
    path: 'ionic-icons',
    loadChildren: () => import('./ionic-icons/ionic-icons.module').then( m => m.IonicIconsPageModule)
  },
  {
    path: 'ionic-alert-ex',
    loadChildren: () => import('./ionic-alert-ex/ionic-alert-ex.module').then( m => m.IonicAlertExPageModule)
  },
  {
    path: 'ex1',
    loadChildren: () => import('./ex1/ex1.module').then( m => m.Ex1PageModule)
  },
  {
    path: 'ex2',
    loadChildren: () => import('./ex2/ex2.module').then( m => m.Ex2PageModule)
  },
  {
    path: 'ex3',
    loadChildren: () => import('./ex3/ex3.module').then( m => m.Ex3PageModule)
  },
  {
    path: 'ionic-loading',
    loadChildren: () => import('./ionic-loading/ionic-loading.module').then( m => m.IonicLoadingPageModule)
  },
  {
    path: 'ionic-lists',
    loadChildren: () => import('./ionic-lists/ionic-lists.module').then( m => m.IonicListsPageModule)
  },
  {
    path: 'ionic-grid',
    loadChildren: () => import('./ionic-grid/ionic-grid.module').then( m => m.IonicGridPageModule)
  },
  {
    path: 'ionic-cards',
    loadChildren: () => import('./ionic-cards/ionic-cards.module').then( m => m.IonicCardsPageModule)
  },
  {
    path: 'ionic-checkbox',
    loadChildren: () => import('./ionic-checkbox/ionic-checkbox.module').then( m => m.IonicCheckboxPageModule)
  },
  {
    path: 'ionic-badges',
    loadChildren: () => import('./ionic-badges/ionic-badges.module').then( m => m.IonicBadgesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
