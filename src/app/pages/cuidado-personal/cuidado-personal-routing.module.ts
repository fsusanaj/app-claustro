import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuidadoPersonalPage } from './cuidado-personal.page';

const routes: Routes = [
  {
    path: '',
    component: CuidadoPersonalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuidadoPersonalPageRoutingModule {}
