import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PackTypedetailPage } from '../pack-typedetail/pack-typedetail';
import { PackConfirmPage } from '../pack-confirm/pack-confirm';

/**
 * Generated class for the PackTypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pack-type',
  templateUrl: 'pack-type.html',
})
export class PackTypePage {

  public recommened_item1:any[];
  public recommened_item2:any[];
  public recommened_item3:any[];
  public image_list:any[];
  public select_room:any;
  public select_day:any;
  public select_share:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PackTypePage');

    this.recommened_item1 = ["1", "3", "1", "3"];
    this.recommened_item2 = ["3", "4", "3", "4"];
    this.recommened_item3 = ["4", "1", "4", "1"];
    this.image_list = ["hei1", "hei7", "hei4"];
    this.select_room = "room1";
    this.select_day = "day1";
    this.select_share = "share1";
  }

  goto_pack_typedetail()
  {
    this.navCtrl.push(PackTypedetailPage);
  }

  goto_back()
  {
    this.navCtrl.pop();
  }

  goto_pack_confirm()
  {
    this.navCtrl.push(PackConfirmPage);
  }

}
