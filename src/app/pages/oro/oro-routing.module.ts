import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OroPage } from './oro.page';

const routes: Routes = [
  {
    path: '',
    component: OroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OroPageRoutingModule {}
