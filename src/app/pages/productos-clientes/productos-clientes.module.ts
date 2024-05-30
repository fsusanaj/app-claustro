import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductosClientesPageRoutingModule } from './productos-clientes-routing.module';

import { ProductosClientesPage } from './productos-clientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductosClientesPageRoutingModule
  ],
  declarations: [ProductosClientesPage]
})
export class ProductosClientesPageModule {}
