import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StayConfirmPage } from './stay-confirm';

@NgModule({
  declarations: [
    StayConfirmPage,
  ],
  imports: [
    IonicPageModule.forChild(StayConfirmPage),
  ],
})
export class StayConfirmPageModule {}
