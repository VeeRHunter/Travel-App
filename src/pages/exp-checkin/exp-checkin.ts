import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ExpTypePage } from '../exp-type/exp-type';

/**
 * Generated class for the ExpCheckinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exp-checkin',
  templateUrl: 'exp-checkin.html',
})
export class ExpCheckinPage {


  public event = {
    checkin: '2017-10-06',
    checkout: '2017-10-06',
    timeEnds: '1990-02-20'
  }

  public adults:any;
  public child:any;
  
  public act_show = {"act_id":"", "act_name":"", "act_by":"", "act_price":"", "act_loc":"", "act_img_count":0, "act_img":"", "act_checkin":""};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpCheckinPage');

    this.adults="Adults1";
    this.child = "Child1";

    this.act_show.act_name = this.navParams.data.navParams.act_name;
    this.act_show.act_by = this.navParams.data.navParams.act_by;
    this.act_show.act_price = this.navParams.data.navParams.act_price;
    this.act_show.act_img_count = this.navParams.data.navParams.act_img_count;
    this.act_show.act_id = this.navParams.data.navParams.act_id;
    this.act_show.act_loc = this.navParams.data.navParams.act_loc;
  }

  goto_exp_type()
  {
    this.act_show.act_checkin = this.event.checkin;
    this.navCtrl.push(ExpTypePage,{navParams:this.act_show});
    // console.log(this.act_show);
  }

  goto_back()
  {
    this.navCtrl.pop();
  }
}
