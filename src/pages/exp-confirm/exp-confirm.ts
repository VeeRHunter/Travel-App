import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';

import { HomepagePage } from '../homepage/homepage';
import { SearchPage } from '../search/search';
import { NotificationInboxPage } from '../notification-inbox/notification-inbox';
import { AccountSettingPage } from '../account-setting/account-setting';

import { MapsPage } from '../maps/maps';
import { ApiserverProvider } from '../../providers/apiserver/apiserver';

/**
 * Generated class for the ExpConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exp-confirm',
  templateUrl: 'exp-confirm.html',
})
export class ExpConfirmPage {
  public act_show = {"act_id":"", "act_name":"", "act_by":"", "act_price":"", "act_loc":"", "act_img_count":0, "act_img":"", "act_checkin":"", "act_img_src":""};
  public act_price_vat:any;


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
  public act_imgList:any[];
  public act_imgCount:any;

  public contact_mode : boolean;

  public check_first : boolean;
  public check_last : boolean;
  public check_phone : boolean;
  public check_email : boolean;
  public check_country : boolean;

  public contact_infor1 = {"act_id":"", "act_checkin":"", "act_price":"", "user_fname":"", "user_lname":"", "user_email":"", "user_phone":"", "user_country":"", "status":""};


  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl:LoadingController, 
    public toastCtrl: ToastController, public apiserver:ApiserverProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpConfirmPage');
    this.act_show.act_name = this.navParams.data.navParams.act_name;
    this.act_show.act_by = this.navParams.data.navParams.act_by;
    this.act_show.act_price = this.navParams.data.navParams.act_price;
    this.act_show.act_img_count = this.navParams.data.navParams.act_img_count;
    this.act_show.act_id = this.navParams.data.navParams.act_id;
    this.act_show.act_loc = this.navParams.data.navParams.act_loc;
    this.act_show.act_checkin = this.navParams.data.navParams.act_checkin;
    this.contact_infor1.act_price = this.act_show.act_price;
    this.act_price_vat = parseFloat(this.act_show.act_price) + 480;

    this.contact_mode = false;

    this.initial_activity();
  }

  goto_payment()
  {

    let send_data = new Array();
    
    this.contact_infor1.act_id = this.act_show.act_id;
    this.contact_infor1.act_checkin = this.act_show.act_checkin;
    this.contact_infor1.status = "book_act";


    this.navCtrl.push(PaymentPage, {navParams:this.contact_infor1});
    
    // if(!this.check_first){
    //   let toast = this.toastCtrl.create({
    //     message:"please input your first name",
    //     duration:2000
    //   })
    //   toast.present();
    // }
    // else if(!this.check_last){
    //   let toast = this.toastCtrl.create({
    //     message:"please input your last name",
    //     duration:2000
    //   })
    //   toast.present();
    // }
    // else if(!this.check_email && !this.contact_mode){
    //   let toast = this.toastCtrl.create({
    //     message:"please input your email",
    //     duration:2000
    //   })
    //   toast.present();
    // }
    // else if(!this.check_phone){
    //   let toast = this.toastCtrl.create({
    //     message:"please input your phone number",
    //     duration:2000
    //   })
    //   toast.present();
    // }
    // else if(!this.contact_infor1.user_country){
    //   let toast = this.toastCtrl.create({
    //     message:"please input your country",
    //     duration:2000
    //   })
    //   toast.present();
    // }
    // else{
    //   send_data.push(this.contact_infor1);
    //   console.log(this.contact_infor1);
  
    //   this.apiserver.postData(send_data).then((result)=>{
    //     if (Object(result).status=="success"){
    //       this.navCtrl.push(PaymentPage, {navParams:this.contact_infor1});
    //     } 
    //     else{  
    //     }
        
    //   }, (err) =>{
    //     let toast = this.toastCtrl.create({
    //       message:"No Network",
    //       duration:2000
    //     })
    //     toast.present();
    //   }); 

    // }
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
        this.act_img_src = Object(result).result.act_img_src + "1.jpeg";
        this.act_show.act_img_src = this.act_img_src;
        this.act_imgList = new Array();
        this.act_loc_list = new Array();
        this.act_loc_list = Object(result).result.act_location;
        for(let i = 0; i < this.act_imgCount; i++)
        {
          this.act_imgList[i] = Object(result).result.act_img_src + (i + 1) + ".jpeg";
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


  countryChange()
  {
    if(this.contact_infor1.user_country.length > 0)
    {
          this.check_country = true;
    }
    else{
      this.check_country = false;
    }
  }

  fnameChange()
  {
    var regex = new RegExp("^[a-zA-Z]+$");
    if (!regex.test(this.contact_infor1.user_fname)) {
        this.check_first = false;
    }
    else{
      this.check_first = true;
    }
  }

  lnameChange()
  {
    var regex = new RegExp("^[a-zA-Z]+$");
    if (!regex.test(this.contact_infor1.user_lname)) {
        this.check_last = false;
    }
    else{
      this.check_last = true;
    }
    // this.last_name = false;
  }

  emailChange()
  {
    var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i

    if(!pattern.test(this.contact_infor1.user_email))
    {
      this.check_email = false;
    }​
    else
    {
      this.check_email = true;
    }
    // this.e_mail = false;
  }

  phoneChange()
  {
    var pattern = new RegExp("^[0-9]+$");

    if(!pattern.test(this.contact_infor1.user_phone))
    {
      this.check_phone = false;
    }​
    else
    {
      this.check_phone = true;
    }
    // this.phone_num = false;
  }

  click_checkbox()
  {
    this.contact_mode = !this.contact_mode;
    console.log(this.contact_mode);
    this.contact_infor1.user_phone = "";
    this.contact_infor1.user_country = "";
    this.contact_infor1.user_email = "";
    this.contact_infor1.user_fname = "";
    this.contact_infor1.user_lname = "";
  }

}
