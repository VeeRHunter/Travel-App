import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticeSettingPage } from './notice-setting';

@NgModule({
  declarations: [
    NoticeSettingPage,
  ],
  imports: [
    IonicPageModule.forChild(NoticeSettingPage),
  ],
})
export class NoticeSettingPageModule {}
