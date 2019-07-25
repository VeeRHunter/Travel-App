import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PackConfirmPage } from './pack-confirm';

@NgModule({
  declarations: [
    PackConfirmPage,
  ],
  imports: [
    IonicPageModule.forChild(PackConfirmPage),
  ],
})
export class PackConfirmPageModule {}
