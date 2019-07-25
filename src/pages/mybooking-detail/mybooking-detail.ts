import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ContactPage } from '../contact/contact';
import { MapsPage } from '../maps/maps';

/**
 * Generated class for the MybookingDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mybooking-detail',
  templateUrl: 'mybooking-detail.html',
})
export class MybookingDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MybookingDetailPage');
  }

  goto_back()
  {
    this.navCtrl.pop();
  }

  click_done()
  {
    this.navCtrl.push(ContactPage);
  }

  goto_map()
  {
    this.navCtrl.push(MapsPage);
  }
}
