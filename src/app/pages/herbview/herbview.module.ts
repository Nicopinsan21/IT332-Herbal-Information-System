import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HerbviewPageRoutingModule } from './herbview-routing.module';

import { HerbviewPage } from './herbview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HerbviewPageRoutingModule
  ],
  declarations: [HerbviewPage]
})
export class HerbviewPageModule {}
