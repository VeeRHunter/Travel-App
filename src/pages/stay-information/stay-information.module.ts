import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StayInformationPage } from './stay-information';

@NgModule({
  declarations: [
    StayInformationPage,
  ],
  imports: [
    IonicPageModule.forChild(StayInformationPage),
  ],
})
export class StayInformationPageModule {}
