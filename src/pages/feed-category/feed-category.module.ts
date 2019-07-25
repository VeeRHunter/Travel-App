import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedCategoryPage } from './feed-category';

@NgModule({
  declarations: [
    FeedCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(FeedCategoryPage),
  ],
})
export class FeedCategoryPageModule {}
