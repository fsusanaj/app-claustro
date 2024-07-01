import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiamantePage } from './diamante.page';

const routes: Routes = [
  {
    path: '',
    component: DiamantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiamantePageRoutingModule {}
