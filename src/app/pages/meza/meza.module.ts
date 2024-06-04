import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MezaPageRoutingModule } from './meza-routing.module';

import { MezaPage } from './meza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MezaPageRoutingModule
  ],
  declarations: [MezaPage]
})
export class MezaPageModule {}
