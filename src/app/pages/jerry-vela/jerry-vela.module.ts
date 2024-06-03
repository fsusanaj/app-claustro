import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JerryVelaPageRoutingModule } from './jerry-vela-routing.module';

import { JerryVelaPage } from './jerry-vela.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JerryVelaPageRoutingModule
  ],
  declarations: [JerryVelaPage]
})
export class JerryVelaPageModule {}
