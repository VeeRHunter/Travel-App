import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StayCheckinPage } from './stay-checkin';

@NgModule({
  declarations: [
    StayCheckinPage,
  ],
  imports: [
    IonicPageModule.forChild(StayCheckinPage),
  ],
})
export class StayCheckinPageModule {}
