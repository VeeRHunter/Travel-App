import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpEditPage } from './exp-edit';

@NgModule({
  declarations: [
    ExpEditPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpEditPage),
  ],
})
export class ExpEditPageModule {}
