import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddToFavoritesPageRoutingModule } from './add-to-favorites-routing.module';

import { AddToFavoritesPage } from './add-to-favorites.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddToFavoritesPageRoutingModule
  ],
  declarations: [AddToFavoritesPage]
})
export class AddToFavoritesPageModule {}
