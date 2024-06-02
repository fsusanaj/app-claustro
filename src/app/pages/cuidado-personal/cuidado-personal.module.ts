import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuidadoPersonalPageRoutingModule } from './cuidado-personal-routing.module';

import { CuidadoPersonalPage } from './cuidado-personal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuidadoPersonalPageRoutingModule
  ],
  declarations: [CuidadoPersonalPage]
})
export class CuidadoPersonalPageModule {}
