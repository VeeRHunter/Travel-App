import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactThankPage } from './contact-thank';

@NgModule({
  declarations: [
    ContactThankPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactThankPage),
  ],
})
export class ContactThankPageModule {}
