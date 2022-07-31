import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HerbviewPage } from './herbview.page';

const routes: Routes = [
  {
    path: '',
    component: HerbviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HerbviewPageRoutingModule {}
