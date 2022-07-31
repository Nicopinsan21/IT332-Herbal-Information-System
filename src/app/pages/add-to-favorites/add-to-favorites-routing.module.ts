import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddToFavoritesPage } from './add-to-favorites.page';

const routes: Routes = [
  {
    path: '',
    component: AddToFavoritesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddToFavoritesPageRoutingModule {}
