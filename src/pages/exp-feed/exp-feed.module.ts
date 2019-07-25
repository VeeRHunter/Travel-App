import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpFeedPage } from './exp-feed';

@NgModule({
  declarations: [
    ExpFeedPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpFeedPage),
  ],
})
export class ExpFeedPageModule {}
