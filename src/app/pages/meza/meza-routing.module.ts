import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MezaPage } from './meza.page';

const routes: Routes = [
  {
    path: '',
    component: MezaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MezaPageRoutingModule {}
