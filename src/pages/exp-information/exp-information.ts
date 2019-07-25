import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ExpCheckinPage } from '../exp-checkin/exp-checkin';
import { HomepagePage } from '../homepage/homepage';
import { SearchPage } from '../search/search';
import { NotificationInboxPage } from '../notification-inbox/notification-inbox';
import { AccountSettingPage } from '../account-setting/account-setting';
import { GalleryPage } from '../gallery/gallery';
import { MapsPage } from '../maps/maps';

/**
 * Generated class for the ExpInformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exp-information',
  templateUrl: 'exp-information.html',
})
export class ExpInformationPage {

  public image_list:any[];
  public slide_list:any[];
  
  public receive_act_data: any[];
  // public act_name_list:any[];
  // public act_by_list:any[];
  // public act_price_list:any[];
  public act_loc_list:any[];
  public act_condition:any[];
  public act_check:any[];
  public act_description:any[];
  public act_meet:any[];
  public act_highlight:any[];
  public act_inclusion:any[];
  public act_exclustion:any[];
  public act_know:any[];
  public act_cancel:any[];
  public act_img_count:any;
  public act_img_list:any[];

  public act_img_id:any;
  public act_img_src:any;
  public actData = {"act_id":"","status":""};
  public act_show = {"act_id":"", "act_name":"", "act_by":"", "act_price":"", "act_loc":"", "act_img_count":0, "act_img":""};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpInformationPage');
    // this.image_list = ["hei1", "hei3", "hei6"];
    // console.log(this.navParams.data.navParams);

    this.act_show.act_name = this.navParams.data.navParams.act_name;
    this.act_show.act_by = this.navParams.data.navParams.act_by;
    this.act_show.act_price = this.navParams.data.navParams.act_price;
    this.act_show.act_img_count = this.navParams.data.navParams.act_img_count;
    this.act_show.act_id = this.navParams.data.navParams.act_id;
    this.act_show.act_loc = this.navParams.data.navParams.act_act_loc[0].val;
    this.act_img_count = this.navParams.data.navParams.act_img_count;
    this.act_img_src = this.navParams.data.navParams.act_img_src;
    this.act_description = this.navParams.data.navParams.act_descriptin;
  
    this.act_loc_list = this.navParams.data.navParams.act_act_loc;
    this.act_cancel = this.navParams.data.navParams.act_cancel;
    this.act_check = this.navParams.data.navParams.act_check;
    this.act_condition = this.navParams.data.navParams.act_condition;
    this.act_exclustion = this.navParams.data.navParams.act_exclusion;
    this.act_inclusion = this.navParams.data.navParams.act_inclusion;
    this.act_know = this.navParams.data.navParams.act_know;
    this.act_meet = this.navParams.data.navParams.act_meet_redempt;

    this.act_img_list = new Array();
    this.slide_list = new Array();
    for(let i = 0; i < this.act_show.act_img_count; i++){
      this.act_img_list[i] = this.navParams.data.navParams.act_img_src + (1 + i) + ".jpeg";
    }
    this.act_img_src = this.act_img_list[0];

    for(let i = 0; i < Math.ceil(this.act_img_count / 3); i++){
      this.slide_list[i] = i;
    }


    // console.log(this.act_img_list);
    // console.log(this.act_loc_list);
    // console.log(this.act_cancel);
    // console.log(this.act_check);
    // console.log(this.act_condition);
    // console.log(this.act_exclustion);
    // console.log(this.act_inclusion);
    // console.log(this.act_know);
    // console.log(this.act_meet);
    // console.log(this.act_know);
  }

  goto_exp_checkin()
  {
    this.navCtrl.push(ExpCheckinPage,{navParams:this.act_show});
  }


  goto_homepage()
  {
    this.navCtrl.push(HomepagePage);
  }

  click_search_button()
  {
    this.navCtrl.push(SearchPage);
  }

  click_notification_button()
  {
    this.navCtrl.push(NotificationInboxPage);
  }

  click_account_button()
  {
    this.navCtrl.push(AccountSettingPage);
  }

  goto_gallery()
  {
    this.navCtrl.push(GalleryPage,{navParams:this.act_img_list});
  }

  goto_map()
  {
    let loc = {"lat":"", "lng":""};
    loc.lat = this.act_loc_list[1].val;
    loc.lng = this.act_loc_list[2].val;
    this.navCtrl.push(MapsPage,{navParams:loc});
  }

  goto_back()
  {
    this.navCtrl.pop();
  }

  init_orderData()
  {
  }

  set_backImage(img)
  {
    this.act_img_src = img;
  }
}
