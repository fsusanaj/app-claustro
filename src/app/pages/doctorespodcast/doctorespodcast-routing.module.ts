import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorespodcastPage } from './doctorespodcast.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorespodcastPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorespodcastPageRoutingModule {}
