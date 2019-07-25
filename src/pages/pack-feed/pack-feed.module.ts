import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PackFeedPage } from './pack-feed';

@NgModule({
  declarations: [
    PackFeedPage,
  ],
  imports: [
    IonicPageModule.forChild(PackFeedPage),
  ],
})
export class PackFeedPageModule {}
