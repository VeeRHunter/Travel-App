import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationInboxPage } from './notification-inbox';

@NgModule({
  declarations: [
    NotificationInboxPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificationInboxPage),
  ],
})
export class NotificationInboxPageModule {}
