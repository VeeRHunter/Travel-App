import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StayCheckinPage } from '../stay-checkin/stay-checkin';


import { HomepagePage } from '../homepage/homepage';
import { SearchPage } from '../search/search';
import { NotificationInboxPage } from '../notification-inbox/notification-inbox';
import { AccountSettingPage } from '../account-setting/account-setting';
import { GalleryPage } from '../gallery/gallery';
import { MapsPage } from '../maps/maps';


/**
 * Generated class for the StayInformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stay-information',
  templateUrl: 'stay-information.html',
})
export class StayInformationPage {

  public recommened_item1:any[];
  public recommened_item2:any[];
  public recommened_item3:any[];

  public hotel_data = {"hotel_id":"", "hotel_name":"", "hotel_image":"", "hotel_img_count":0, "hotel_lat":"", "hotel_lng":"", "hotel_address":"", 
                        "hotel_extra_service":"", "hotel_total_price":"", "hotel_type":""};
  public hotel_description:any;
  public hotel_check_inout:any[];
  public hotel_nearby:any[];
  public hotel_number_room:any[];
  public hotel_rule:any[];
  public hotel_service:any[];

  public hotel_image_list:any[];
  public slide_list:any[];

  public hotel_roomtype:any[];

  public hotel_facility:any[];
  public hotel_facility_type1:any[];
  public hotel_facility_type2:any[];
  
    public hotel_amenity:any[];
    public hotel_amenity_type1:any[];
    public hotel_amenity_type2:any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StayInformationPage');
    // this.recommened_item2 = ["assets/img/1.png", "assets/img/4.png", "assets/img/3.png"];
    // this.recommened_item1 = ["1", "4", "3"];
    // this.recommened_item3 = ["1", "4", "3"];

    // console.log(this.navParams.data.navParams);
    this.hotel_data.hotel_id = this.navParams.data.navParams.hotel_id;
    this.hotel_data.hotel_image = this.navParams.data.navParams.hotel_image + "1.jpg";
    this.hotel_data.hotel_img_count = this.navParams.data.navParams.hotel_image_count;
    this.hotel_data.hotel_lat = this.navParams.data.navParams.hotel_latitude;
    this.hotel_data.hotel_lng = this.navParams.data.navParams.hotel_langtitude;
    this.hotel_data.hotel_address = this.navParams.data.navParams.hotel_address;
    this.hotel_data.hotel_extra_service = this.navParams.data.navParams.hotel_extra_service;
    this.hotel_data.hotel_total_price = this.navParams.data.navParams.hotel_total_price;
    this.hotel_data.hotel_type = this.navParams.data.navParams.hotel_type;
    this.hotel_data.hotel_name = this.navParams.data.navParams.name;


    this.hotel_check_inout = this.navParams.data.navParams.hotel_check_in_out;
    this.hotel_nearby = this.navParams.data.navParams.hotel_near_by_place;
    this.hotel_number_room = this.navParams.data.navParams.hotel_number_room;
    this.hotel_rule = this.navParams.data.navParams.hotel_rule;
    this.hotel_service = this.navParams.data.navParams.hotel_service;
    this.hotel_description = this.navParams.data.navParams.hotel_description;
    this.hotel_roomtype = this.navParams.data.navParams.room_type;

    this.hotel_image_list = new Array();
    this.slide_list = new Array();
    this.hotel_facility = new Array();

    for(let i = 0; i < this.hotel_data.hotel_img_count - 1; i++)
    {
      this.hotel_image_list[i] =  this.navParams.data.navParams.hotel_image + (i + 2) + ".jpg";
    }


    // console.log(this.hotel_image_list.length);

    for(let i = 0; i < Math.ceil(this.navParams.data.navParams.hotel_image_count / 3); i++)
    {
      this.slide_list[i] =  i;
    }

    this.order_hotel_facility();
    this.order_hotel_amenity();
    // console.log(this.navParams.data.navParams);
  }

  goto_stay_checkin()
  {
    let send_checkin = {"hotel_id":"", "hotel_name":"", "hotel_address":"", "lat":"", "lng":""};
    send_checkin.hotel_id = this.hotel_data.hotel_id;
    send_checkin.hotel_name = this.hotel_data.hotel_name;
    send_checkin.hotel_address = this.hotel_data.hotel_address;
    send_checkin.lat = this.hotel_data.hotel_lat;
    send_checkin.lng = this.hotel_data.hotel_lng;
    this.navCtrl.push(StayCheckinPage, {navParams:send_checkin});
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
    this.navCtrl.push(GalleryPage, {navParams:this.hotel_image_list});
  }

  set_backImage(image_src)
  {
    this.hotel_data.hotel_image = image_src;
  }

  goto_map()
  {
    let loc = {"lat":"", "lng":""};
    loc.lat = this.hotel_data.hotel_lat;
    loc.lng = this.hotel_data.hotel_lng;
    this.navCtrl.push(MapsPage,{navParams:loc});
  }

  goto_back()
  {
    this.navCtrl.pop();
  }

  order_hotel_facility()
  {
    let k = 0;
    this.hotel_facility[0] = "";
    this.hotel_facility_type1 = new Array();
    this.hotel_facility_type2 = new Array();
    for(let i = 0; i < this.hotel_roomtype.length; i++)
    {
      for(let j = 0; j < this.hotel_roomtype[i].room_entertain.length; j++)
      {
        let flag = false;
        for(let m = 0; m < this.hotel_facility.length; m++)
        {
          if(this.hotel_facility[m] != this.hotel_roomtype[i].room_entertain[j].type){
            flag = true;
          }
          else{
            flag = false;
            break;
          }
        }
        if(flag){
          this.hotel_facility[k] = this.hotel_roomtype[i].room_entertain[j].type;
          k++;
        }
      }
    }

    for(let i = 0; i < Math.ceil(this.hotel_facility.length / 2); i++){
      this.hotel_facility_type1[i] = this.hotel_facility[i];
    }

    for(let i = Math.ceil(this.hotel_facility.length / 2); i < this.hotel_facility.length; i++){
      this.hotel_facility_type2[i] = this.hotel_facility[i];
    }
  }

  order_hotel_amenity()
  {
    let k = 0;
    this.hotel_amenity = new Array();
    this.hotel_amenity_type1 = new Array();
    this.hotel_amenity_type2 = new Array();

    this.hotel_amenity[0] = "";

    for(let i = 0; i < this.hotel_roomtype.length; i++)
    {
      for(let j = 0; j < this.hotel_roomtype[i].room_bath_toilet.length; j++)
      {
        let flag = false;
        for(let m = 0; m < this.hotel_amenity.length; m++)
        {
          if(this.hotel_amenity[m] != this.hotel_roomtype[i].room_bath_toilet[j].type){
            flag = true;
          }
          else{
            flag = false;
            break;
          }
        }
        if(flag){
          this.hotel_amenity[k] = this.hotel_roomtype[i].room_bath_toilet[j].type;
          k++;
        }
      }
    }

    for(let i = 0; i < this.hotel_roomtype.length; i++)
    {
      for(let j = 0; j < this.hotel_roomtype[i].room_comforts.length; j++)
      {
        let flag = false;
        for(let m = 0; m < this.hotel_amenity.length; m++)
        {
          if(this.hotel_amenity[m] != this.hotel_roomtype[i].room_comforts[j].type){
            flag = true;
          }
          else{
            flag = false;
            break;
          }
        }
        if(flag){
          this.hotel_amenity[k] = this.hotel_roomtype[i].room_comforts[j].type;
          k++;
        }
      }
    }

    for(let i = 0; i < Math.ceil(this.hotel_amenity.length / 2); i++){
      this.hotel_amenity_type1[i] = this.hotel_amenity[i];
    }

    for(let i = Math.ceil(this.hotel_amenity.length / 2); i < this.hotel_amenity.length; i++){
      this.hotel_amenity_type2[i] = this.hotel_amenity[i];
    }

  }

}
