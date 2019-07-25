import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PackCheckinPage } from './pack-checkin';

@NgModule({
  declarations: [
    PackCheckinPage,
  ],
  imports: [
    IonicPageModule.forChild(PackCheckinPage),
  ],
})
export class PackCheckinPageModule {}
