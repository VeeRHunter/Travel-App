import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';

import { ExpInformationPage } from '../exp-information/exp-information';

import { HomepagePage } from '../homepage/homepage';
import { SearchPage } from '../search/search';
import { NotificationInboxPage } from '../notification-inbox/notification-inbox';
import { AccountSettingPage } from '../account-setting/account-setting';
import { ApiserverProvider } from '../../providers/apiserver/apiserver';

/**
 * Generated class for the ExpFeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exp-feed',
  templateUrl: 'exp-feed.html',
})
export class ExpFeedPage {

  public act_imageList:any[];
  public act_name:any[];

  public receive_act_data: any[];
  public act_name_list:any[];
  public act_by_list:any[];
  public act_price_list:any[];
  public act_loc_list:any[];
  public act_description:any[];
  public actData = {"act_id":"","status":""};
  public act_show = {"act_name":"", "act_by":"", "act_price":"", "act_loc":""};
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl:LoadingController, 
    public toastCtrl: ToastController, public apiserver:ApiserverProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpFeedPage');
    this.order_act_detail();
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

  goto_exp_information(index)
  {
    this.actData.act_id = index + 1;
    this.actData.status = "find_activity";
    let send_data = new Array();
    send_data.push(this.actData);

    this.apiserver.postData(send_data).then((result)=>{
      if (Object(result).status=="success"){
        this.navCtrl.push(ExpInformationPage,{navParams:Object(result).result});
      } else {  
      }
      
    }, (err) =>{
      let toast = this.toastCtrl.create({
        message:"No Network",
        duration:2000
      })
      toast.present();
    }); 
  }

  goto_back()
  {
    this.navCtrl.pop();
  }


  order_act_detail()
  {
    this.act_imageList = new Array();
    this.act_name = new Array();
    this.act_by_list = new Array();
    this.act_price_list = new Array();
    this.act_loc_list = new Array();
    this.act_description = new Array();

    let status = "order_activity";
    this.actData.status  = status;
      
    let send_data = new Array();
    send_data.push(this.actData);
    this.apiserver.postData(send_data).then((result)=>{
      if (Object(result).status=="success"){

        this.receive_act_data = Object(result).result;
        for(let i = 0; i < this.receive_act_data.length; i++)
        {
          this.act_imageList[i] = this.receive_act_data[i].img_src + "1.jpeg";
          this.act_name[i] = this.receive_act_data[i].name;
          this.act_by_list[i] = this.receive_act_data[i].act_by;
          this.act_price_list[i] = this.receive_act_data[i].act_price;
          this.act_loc_list[i] = this.receive_act_data[i].act_act_loc;
          this.act_description[i] = this.receive_act_data[i].act_descriptin;
        }
        console.log(this.act_name);
      } else {  
      }
    }, (err) =>{
      let toast = this.toastCtrl.create({
        message:"No Network",
        duration:2000
      })
      toast.present();
    }); 
  }

}
