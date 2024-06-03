import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JoseCervantesPageRoutingModule } from './jose-cervantes-routing.module';

import { JoseCervantesPage } from './jose-cervantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JoseCervantesPageRoutingModule
  ],
  declarations: [JoseCervantesPage]
})
export class JoseCervantesPageModule {}
