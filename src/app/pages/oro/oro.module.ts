import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OroPageRoutingModule } from './oro-routing.module';

import { OroPage } from './oro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OroPageRoutingModule
  ],
  declarations: [OroPage]
})
export class OroPageModule {}
