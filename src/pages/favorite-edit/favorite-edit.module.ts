import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoriteEditPage } from './favorite-edit';

@NgModule({
  declarations: [
    FavoriteEditPage,
  ],
  imports: [
    IonicPageModule.forChild(FavoriteEditPage),
  ],
})
export class FavoriteEditPageModule {}
