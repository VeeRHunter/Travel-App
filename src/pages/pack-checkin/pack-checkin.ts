import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PackTypePage } from '../pack-type/pack-type';

/**
 * Generated class for the PackCheckinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pack-checkin',
  templateUrl: 'pack-checkin.html',
})
export class PackCheckinPage {

  public adults:any;
  public child:any;
  public infants:any;
  public pet:any;

  public event = {
    checkin: '2017-09-18',
    checkout: '2017-09-08',
    timeEnds: '1990-02-20'
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PackCheckinPage');
    this.adults="Adults1";
    this.child = "Child1";
    this.infants = "Infants1";
    this.pet = "Pet1";
  }

  goto_back()
  {
    this.navCtrl.pop();
  }

  goto_pack_type()
  {
    this.navCtrl.push(PackTypePage);
  }

}
