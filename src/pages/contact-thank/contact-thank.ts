import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomepagePage } from '../homepage/homepage';

/**
 * Generated class for the ContactThankPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-thank',
  templateUrl: 'contact-thank.html',
})
export class ContactThankPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactThankPage');
  }

  done()
  {
    this.navCtrl.push(HomepagePage);
  }

}
