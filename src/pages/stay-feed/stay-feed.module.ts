import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StayFeedPage } from './stay-feed';

@NgModule({
  declarations: [
    StayFeedPage,
  ],
  imports: [
    IonicPageModule.forChild(StayFeedPage),
  ],
})
export class StayFeedPageModule {}
