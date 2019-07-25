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
 * Generated class for the StayConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stay-confirm',
  templateUrl: 'stay-confirm.html',
})
export class StayConfirmPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl:LoadingController, 
    public toastCtrl: ToastController, public apiserver:ApiserverProvider) {
  }

  public hotel_data = {"hotel_id":"", "hotel_name":"", "hotel_address":"", "hotel_checkin":"", "hotel_checkout":"", "lat":"", "lng":"", "total_price":"", "total_vat":""};
  public room_img_src:any;
  public room_typeValue:any;

  public contact_infor1 = {"hotel_id":"", "room_typeId":"", "hotel_checkin":"", "hotel_checkout":"", "user_fname":"", "user_lname":"", "user_email":"", "user_phone":"", "user_country":"", "status":""};
  public contact_infor2 = {"hotel_id":"", "room_typeId":"", "hotel_checkin":"", "hotel_checkout":"", "user_fname":"", "user_lname":"", "user_email":"", "user_phone":"", "user_country":"", "status":""};
  public contact_mode : boolean;

  public check_first : boolean;
  public check_last : boolean;
  public check_phone : boolean;
  public check_email : boolean;
  public check_country : boolean;

  public check_image : boolean;

  ionViewDidLoad() {
    console.log('ionViewDidLoad StayConfirmPage');
    
        this.hotel_data.hotel_id = this.navParams.data.navParams.hotel_id;
        this.hotel_data.hotel_name = this.navParams.data.navParams.hotel_name;
        this.hotel_data.hotel_address = this.navParams.data.navParams.hotel_address;
        this.hotel_data.hotel_checkin = this.navParams.data.navParams.hotel_checkin;
        this.hotel_data.hotel_checkout = this.navParams.data.navParams.hotel_checkout;
        this.hotel_data.lat = this.navParams.data.navParams.lat;
        this.hotel_data.lng = this.navParams.data.navParams.lng;
        this.hotel_data.total_price = this.navParams.data.navParams.total_price;
        this.hotel_data.total_vat = this.navParams.data.navParams.total_vat;
        this.contact_mode = false;
        this.check_image = false;

        this.initial_set();

    this.check_email = false;
    this.check_first = false;
    this.check_last = false;
    this.check_country = false;
    this.check_phone = false;
  }

  goto_stay_payment()
  {
    let send_data = new Array();
    
    this.contact_infor1.hotel_id = this.hotel_data.hotel_id;
    this.contact_infor1.hotel_checkin = this.hotel_data.hotel_checkin;
    this.contact_infor1.hotel_checkout = this.hotel_data.hotel_checkout;
    this.contact_infor1.room_typeId = this.navParams.data.navParams.roomtype_id;
    this.contact_infor1.status = "book_hotel";
    
    if(!this.check_first){
      let toast = this.toastCtrl.create({
        message:"please input your first name",
        duration:2000
      })
      toast.present();
    }
    else if(!this.check_last){
      let toast = this.toastCtrl.create({
        message:"please input your last name",
        duration:2000
      })
      toast.present();
    }
    else if(!this.check_email && !this.contact_mode){
      let toast = this.toastCtrl.create({
        message:"please input your email",
        duration:2000
      })
      toast.present();
    }
    else if(!this.check_phone){
      let toast = this.toastCtrl.create({
        message:"please input your phone number",
        duration:2000
      })
      toast.present();
    }
    else if(!this.contact_infor1.user_country){
      let toast = this.toastCtrl.create({
        message:"please input your country",
        duration:2000
      })
      toast.present();
    }
    else{
      send_data.push(this.contact_infor1);
      console.log(this.contact_infor1);
  
      this.apiserver.postData(send_data).then((result)=>{
        if (Object(result).status=="success"){
          this.navCtrl.push(PaymentPage, {navParams:this.contact_infor1});
        } 
        else{  
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
    loc.lat = this.hotel_data.lat;
    loc.lng = this.hotel_data.lng;
    this.navCtrl.push(MapsPage,{navParams:loc});
  }

  goto_back()
  {
    this.navCtrl.pop();
  }

  initial_set()
  {
    let send = {"room_typeId":"", "status":""};
    send.room_typeId = this.navParams.data.navParams.roomtype_id;
    send.status = "find_roomtype";

    let send_data = new Array();
    send_data.push(send);

    this.apiserver.postData(send_data).then((result)=>{
      if (Object(result).status=="success"){
        console.log(Object(result).result);
        if(Object(result).result.room_img_count != 0)
          this.room_img_src = Object(result).result.room_img_src + "1.jpg";
          this.room_typeValue = Object(result).result.type_value;        

          if(Object(result).result.room_img_count == 0){
            this.check_image = true;
          }
      } else{  
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
