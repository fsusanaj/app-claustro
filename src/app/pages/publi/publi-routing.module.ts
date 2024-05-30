import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PubliPage } from './publi.page';

const routes: Routes = [
  {
    path: '',
    component: PubliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PubliPageRoutingModule {}
