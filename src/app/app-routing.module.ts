import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'product-filter',
    loadChildren: () => import('./pages/product-filter/product-filter.module').then( m => m.ProductFilterPageModule)
  },
  {
    path: 'loader',
    loadChildren: () => import('./loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'add-to-favorites',
    loadChildren: () => import('./pages/add-to-favorites/add-to-favorites.module').then( m => m.AddToFavoritesPageModule)
  },
  {
    path: 'herbview',
    loadChildren: () => import('./pages/herbview/herbview.module').then( m => m.HerbviewPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
