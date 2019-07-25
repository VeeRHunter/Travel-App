import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MybookingDetailPage } from './mybooking-detail';

@NgModule({
  declarations: [
    MybookingDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MybookingDetailPage),
  ],
})
export class MybookingDetailPageModule {}
