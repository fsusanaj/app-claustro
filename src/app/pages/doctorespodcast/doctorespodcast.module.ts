import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorespodcastPageRoutingModule } from './doctorespodcast-routing.module';

import { DoctorespodcastPage } from './doctorespodcast.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorespodcastPageRoutingModule
  ],
  declarations: [DoctorespodcastPage]
})
export class DoctorespodcastPageModule {}
