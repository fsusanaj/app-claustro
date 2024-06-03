import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JerryVelaPage } from './jerry-vela.page';

const routes: Routes = [
  {
    path: '',
    component: JerryVelaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JerryVelaPageRoutingModule {}
