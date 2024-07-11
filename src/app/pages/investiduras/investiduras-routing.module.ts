import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvestidurasPage } from './investiduras.page';

const routes: Routes = [
  {
    path: '',
    component: InvestidurasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvestidurasPageRoutingModule {}
