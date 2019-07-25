import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoPreviewPage } from './video-preview';

@NgModule({
  declarations: [
    VideoPreviewPage,
  ],
  imports: [
    IonicPageModule.forChild(VideoPreviewPage),
  ],
})
export class VideoPreviewPageModule {}
