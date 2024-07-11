import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvestidurasPageRoutingModule } from './investiduras-routing.module';

import { InvestidurasPage } from './investiduras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvestidurasPageRoutingModule
  ],
  declarations: [InvestidurasPage]
})
export class InvestidurasPageModule {}
