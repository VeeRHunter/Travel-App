import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { SignupfullPage } from '../signupfull/signupfull';
import{ LoginPage } from '../login/login';

import { FavoriteEditPage } from '../favorite-edit/favorite-edit';
import { ExpEditPage } from '../exp-edit/exp-edit';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menuCtrl:MenuController) {

  }

  ionViewDidLoad()
  {
    this.menuCtrl.swipeEnable(false);
  }

  signUp_click()
  {
    this.navCtrl.push(SignupfullPage);
  }

  login_click()
  {
    this.navCtrl.push(LoginPage);
    // this.navCtrl.push(FavoriteEditPage);
    // this.navCtrl.push(ExpEditPage);
  }


}
