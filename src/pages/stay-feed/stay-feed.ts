import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { StayInformationPage } from '../stay-information/stay-information';


import { HomepagePage } from '../homepage/homepage';
import { SearchPage } from '../search/search';
import { NotificationInboxPage } from '../notification-inbox/notification-inbox';
import { AccountSettingPage } from '../account-setting/account-setting';
import { ApiserverProvider } from '../../providers/apiserver/apiserver';

/**
 * Generated class for the StayFeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stay-feed',
  templateUrl: 'stay-feed.html',
})
export class StayFeedPage {

  public hotel_nameList:any[];
  public hotel_imgsrc:any[];
  public hotel_addressList:any[];
  public hotel_priceList:any[];

  public hotel_list:any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl:LoadingController, 
    public toastCtrl: ToastController, public apiserver:ApiserverProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StayFeedPage');
    this.initial_orderHotel();
  }

  goto_stay_information()
  {
    this.navCtrl.push(StayInformationPage);
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

  goto_back()
  {
    this.navCtrl.pop();
  }
  
  initial_orderHotel()
  {
    let send = {"hotel_id":"", "status":"order_hotel"};
    let send_data = new Array();
    send_data.push(send);

    this.apiserver.postData(send_data).then((result)=>{
      if (Object(result).status=="success"){

        // console.log(Object(result).result);

        this.hotel_addressList = new Array();
        this.hotel_imgsrc = new Array();
        this.hotel_nameList = new Array();
        this.hotel_priceList = new Array();

        this.hotel_list = new Array();

        for(let i = 0; i < Object(result).result.length; i++){
          this.hotel_imgsrc[i] = Object(result).result[i].img_src + "1.jpg";
          this.hotel_list[i] = i;
          this.hotel_addressList[i] = Object(result).result[i].hotel_address;
          this.hotel_nameList[i] = Object(result).result[i].name;
          this.hotel_priceList[i] = Object(result).result[i].hotel_total_price;
        }

        console.log(this.hotel_imgsrc);
        console.log(this.hotel_addressList);
        console.log(this.hotel_nameList);
        console.log(this.hotel_priceList);
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


  goto_hotel(index)
  {
    // console.log(index);

    let send = {"hotel_id":"", "status":""};
    send.hotel_id = index + 1;
    send.status = "find_hotel";
    let send_data = new Array();
    send_data.push(send);

    this.apiserver.postData(send_data).then((result)=>{
      if (Object(result).status=="success"){
        this.navCtrl.push(StayInformationPage,{navParams:Object(result).result});
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
