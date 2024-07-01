import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiamantePageRoutingModule } from './diamante-routing.module';

import { DiamantePage } from './diamante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiamantePageRoutingModule
  ],
  declarations: [DiamantePage]
})
export class DiamantePageModule {}
