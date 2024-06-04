import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZarcoPage } from './zarco.page';

const routes: Routes = [
  {
    path: '',
    component: ZarcoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZarcoPageRoutingModule {}
