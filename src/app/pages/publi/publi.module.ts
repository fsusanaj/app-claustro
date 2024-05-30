import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PubliPageRoutingModule } from './publi-routing.module';

import { PubliPage } from './publi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PubliPageRoutingModule
  ],
  declarations: [PubliPage]
})
export class PubliPageModule {}
