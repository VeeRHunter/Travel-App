import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PackInformationPage } from './pack-information';

@NgModule({
  declarations: [
    PackInformationPage,
  ],
  imports: [
    IonicPageModule.forChild(PackInformationPage),
  ],
})
export class PackInformationPageModule {}
