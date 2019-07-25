import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StaytypeDetailPage } from './staytype-detail';

@NgModule({
  declarations: [
    StaytypeDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(StaytypeDetailPage),
  ],
})
export class StaytypeDetailPageModule {}
