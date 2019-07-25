import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';

import { ExpTypedetailPage } from '../exp-typedetail/exp-typedetail';
import { ExpConfirmPage } from '../exp-confirm/exp-confirm';
import { ApiserverProvider } from '../../providers/apiserver/apiserver';

/**
 * Generated class for the ExpTypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exp-type',
  templateUrl: 'exp-type.html',
})
export class ExpTypePage {

  public select_day:any;
  public act_show = {"act_id":"", "act_name":"", "act_by":"", "act_price":"", "act_loc":"", "act_img_count":0, "act_img":"", "act_checkin":"", "act_img_src":""};
  public act_imgList:any[];
  public act_img_src:any;
  public act_imgCount:any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl:LoadingController, 
    public toastCtrl: ToastController, public apiserver:ApiserverProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpTypePage');
    this.select_day = "day1";
    this.act_show.act_name = this.navParams.data.navParams.act_name;
    this.act_show.act_by = this.navParams.data.navParams.act_by;
    this.act_show.act_price = this.navParams.data.navParams.act_price;
    this.act_show.act_img_count = this.navParams.data.navParams.act_img_count;
    this.act_show.act_id = this.navParams.data.navParams.act_id;
    this.act_show.act_loc = this.navParams.data.navParams.act_loc;
    this.act_show.act_checkin = this.navParams.data.navParams.act_checkin;

    this.initial_activity();
  }

  goto_back()
  {
    this.navCtrl.pop();
  }

  goto_type_detail()
  {
    // this.navCtrl.push(ExpTypedetailPage,{navParams:this.act_show});
  }

  goto_type_confirm()
  {
    this.navCtrl.push(ExpConfirmPage, {navParams:this.act_show});
  }

  initial_activity()
  {
    let send = {"act_id":"", "status":""};
    send.act_id = this.act_show.act_id;
    send.status = "find_activity";

    let send_data = new Array();
    send_data.push(send);
    
    this.apiserver.postData(send_data).then((result)=>{
      if (Object(result).status=="success"){
        // this.navCtrl.push(ExpInformationPage,{navParams:Object(result).result});
        console.log(Object(result).result);
        this.act_imgCount = Object(result).result.act_img_count;
        this.act_img_src = Object(result).result.act_img_src;
        this.act_show.act_img_src = this.act_img_src;
        this.act_imgList = new Array();
        for(let i = 0; i < this.act_imgCount; i++)
        {
          this.act_imgList[i] = this.act_img_src + (i + 1) + ".jpeg";
        }
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
