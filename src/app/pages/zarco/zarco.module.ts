import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZarcoPageRoutingModule } from './zarco-routing.module';

import { ZarcoPage } from './zarco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZarcoPageRoutingModule
  ],
  declarations: [ZarcoPage]
})
export class ZarcoPageModule {}
