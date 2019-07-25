import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpInformationPage } from './exp-information';

@NgModule({
  declarations: [
    ExpInformationPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpInformationPage),
  ],
})
export class ExpInformationPageModule {}
