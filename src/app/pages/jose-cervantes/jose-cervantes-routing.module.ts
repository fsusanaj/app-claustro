import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JoseCervantesPage } from './jose-cervantes.page';

const routes: Routes = [
  {
    path: '',
    component: JoseCervantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JoseCervantesPageRoutingModule {}
