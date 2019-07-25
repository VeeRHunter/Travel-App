import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { FeedCategoryPage } from '../feed-category/feed-category';

import { SearchPage } from '../search/search';
import { NotificationInboxPage } from '../notification-inbox/notification-inbox';
import { AccountSettingPage } from '../account-setting/account-setting';

import { GalleryPage } from '../gallery/gallery';
import { VideoPreviewPage } from '../video-preview/video-preview';
import { MapsPage } from '../maps/maps';
// import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { ExpInformationPage } from '../exp-information/exp-information';
import { PackInformationPage } from '../pack-information/pack-information';
import { StayInformationPage } from '../stay-information/stay-information';
import { StaytypeDetailPage } from '../staytype-detail/staytype-detail';
import { ApiserverProvider } from '../../providers/apiserver/apiserver';


/**
 * Generated class for the HomepagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homepage',
  templateUrl: 'homepage.html',
})
export class HomepagePage {

  public image_list:any[];

  public hotel_imageList:any[];
  public hotel_name:any[];
  public hotel_price:any[];
  public hotel_address:any[];
  public hotel_nameone:any;
  public hotel_priceone:any;
  public hotel_addressone:any;


  public receive_data: any[];
  public img_id:any;
  public img_src:any;
  public hotelData = {"hotel_id":"","status":""};

  public act_imageList:any[];
  public act_name:any[];

  public receive_act_data: any[];
  public act_name_list:any[];
  public act_by_list:any[];
  public act_price_list:any[];
  public act_loc_list:any[];
  public act_img_id:any;
  public act_img_src:any;
  public actData = {"act_id":"","status":""};
  public act_show = {"act_name":"", "act_by":"", "act_price":"", "act_loc":""};

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl:LoadingController, 
    public toastCtrl: ToastController, public apiserver:ApiserverProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomepagePage');
    // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.image_list = ["1","3","4"];
    // this.hotel_imageList = ["1", "2", "3", "4", "5", "6", "7", "8"];

    this.order_hotel_detail();
    this.order_act_detail();

  }

  click_menu_button()
  {
    this.navCtrl.push(FeedCategoryPage);
  }

  goto_homepage()
  {
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
  
  goto_galley()
  {
    this.navCtrl.push(GalleryPage);
  }

  goto_video()
  {
    this.navCtrl.push(VideoPreviewPage);
  }

  goto_exp_infor(index)
  {
    // this.navCtrl.push(ExpInformationPage);
    // console.log(index);
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

  goto_pack_infor()
  {
    this.navCtrl.push(PackInformationPage);
  }

  goto_stay_infor()
  {
    // this.navCtrl.push(StayInformationPage);
  }

  goto_hotel_detail()
  {
    this.navCtrl.push(StayInformationPage);
  }


  click_left()
  {
    if(this.img_id > 0)
      this.img_id = this.img_id - 1;
    else
      this.img_id = 0;

      this.select_image2(this.img_id);
  }

  click_right()
  {
    
    if(this.img_id < this.receive_data.length - 1)
      this.img_id = this.img_id + 1;
    else
      this.img_id = this.receive_data.length - 1;
    this.select_image2(this.img_id);
  }

  select_image2(index)
  {
    this.img_src = this.hotel_imageList[index];
    this.hotel_addressone = this.hotel_address[index];
    this.hotel_nameone = this.hotel_name[index];
    this.hotel_priceone = this.hotel_price[index];
  }
  goto_hotel(index)
  {
    // console.log(index);
    this.hotelData.hotel_id = index + 1;
    this.hotelData.status = "find_hotel";
    let send_data = new Array();
    send_data.push(this.hotelData);

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

  order_hotel_detail()
  {
    this.hotel_imageList = new Array();
    this.hotel_name = new Array();
    this.hotel_price = new Array();
    this.hotel_address = new Array();
    // console.log((this.hotel_imageList.length / 4));
      let status = "order_hotel";
      this.hotelData.status  = status;
      this.img_id = 0;
      
      let send_data = new Array();
      send_data.push(this.hotelData);
      this.apiserver.postData(send_data).then((result)=>{
        if (Object(result).status=="success"){

          this.receive_data = Object(result).result;
          for(let i = 0; i < this.receive_data.length; i++)
          {
            this.hotel_imageList[i] = this.receive_data[i].img_src + "1.jpg";
            this.hotel_name[i] = this.receive_data[i].name;
            this.hotel_address[i] = this.receive_data[i].hotel_address;
            this.hotel_price[i] = this.receive_data[i].hotel_total_price;
          }
          this.img_src = this.hotel_imageList[0];
          this.hotel_addressone = this.hotel_address[0];
          this.hotel_nameone = this.hotel_name[0];
          this.hotel_priceone = this.hotel_price[0];
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

  order_act_detail()
  {
    this.act_imageList = new Array();
    this.act_name = new Array();
    this.act_by_list = new Array();
    this.act_price_list = new Array();
    this.act_loc_list = new Array();
    // console.log((this.act_imageList.length / 4));
    let status = "order_activity";
    this.actData.status  = status;
    this.act_img_id = 0;
      
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
        }
        this.act_img_src = this.act_imageList[0];
        this.act_show.act_name = this.act_name[0];
        this.act_show.act_by = this.act_by_list[0];
        this.act_show.act_price = this.act_price_list[0];
        this.act_show.act_loc = this.act_loc_list[0][0].val;
        // console.log(this.act_loc_list);
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

  click_act_left()
  {
    if(this.act_img_id > 0)
      this.act_img_id = this.act_img_id - 1;
    else
      this.act_img_id = 0;

      this.act_img_src = this.act_imageList[this.act_img_id];
      this.act_show.act_name = this.act_name[this.act_img_id];
      this.act_show.act_by = this.act_by_list[this.act_img_id];
      this.act_show.act_price = this.act_price_list[this.act_img_id];
      this.act_show.act_loc = this.act_loc_list[this.act_img_id][0].val;
      // this.act_show.act_loc = this.receive_act_data[this.act_img_id].act_act_loc[0].val;
  }
  click_act_right()
  {

    if(this.act_img_id < this.receive_act_data.length - 1)
      this.act_img_id = this.act_img_id + 1;
    else
      this.act_img_id = this.receive_act_data.length - 1;

    this.act_img_src = this.act_imageList[this.act_img_id];
    this.act_show.act_name = this.act_name[this.act_img_id];
    this.act_show.act_by = this.act_by_list[this.act_img_id];
    this.act_show.act_price = this.act_price_list[this.act_img_id];
    this.act_show.act_loc = this.act_loc_list[this.act_img_id][0].val;
  }

}
