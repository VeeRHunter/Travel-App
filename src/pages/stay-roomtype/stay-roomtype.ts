import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { StaytypeDetailPage } from '../staytype-detail/staytype-detail';
import { HomepagePage } from '../homepage/homepage';
import { ApiserverProvider } from '../../providers/apiserver/apiserver';
import { StayConfirmPage } from '../stay-confirm/stay-confirm';

/**
 * Generated class for the StayRoomtypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stay-roomtype',
  templateUrl: 'stay-roomtype.html',
})
export class StayRoomtypePage {

  public recommened_item1:any[];
  public recommened_item2:any[];
  public recommened_item3:any[];
  public select_room:any;
  public select_bed:any;
  public total_price:any;


  public hotel_data = {"hotel_id":"", "hotel_name":"", "hotel_address":"", "hotel_checkin":"", "hotel_checkout":"", "lat":"", "lng":"", "total_price":"", "total_vat":"", "roomtype_id":""};

  public room_typeName:any[];
  public room_typeImage:any[][];
  public room_typeImgSrc:any[];
  public room_typeImgCnt:any[];
  public room_typeId:any[];
  public slider_list:any[][];



  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl:LoadingController, 
    public toastCtrl: ToastController, public apiserver:ApiserverProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StayRoomtypePage');
    this.recommened_item1 = ["1", "3", "1", "3"];
    this.recommened_item2 = ["3", "4", "3", "4"];
    this.recommened_item3 = ["4", "1", "4", "1"];
    this.select_room = "room1";
    this.select_bed = "bed1";


    this.hotel_data.hotel_id = this.navParams.data.navParams.hotel_id;
    this.hotel_data.hotel_address = this.navParams.data.navParams.hotel_address;
    this.hotel_data.hotel_name = this.navParams.data.navParams.hotel_name;
    this.hotel_data.lat = this.navParams.data.navParams.lat;
    this.hotel_data.lng = this.navParams.data.navParams.lng;
    this.hotel_data.hotel_checkin = this.navParams.data.navParams.hotel_checkin;
    this.hotel_data.hotel_checkout = this.navParams.data.navParams.hotel_checkout;
    // console.log(this.hotel_data);
    // console.log(this.navParams.data.navParams);


    this.order_rooms();

  }

  goto_back()
  {
    this.navCtrl.pop();
  }

  goto_staytype_detail(i)
  {

    this.hotel_data.roomtype_id = this.room_typeId[i];
    this.hotel_data.total_price = this.total_price;
    this.hotel_data.total_vat = "8480";
    this.navCtrl.push(StayConfirmPage, {navParams:this.hotel_data});
    // console.log(i);
  }

  goto_homepage()
  {
    this.navCtrl.push(HomepagePage);
  }

  order_rooms()
  {
    let send = {"hotel_id":"", "status":""};
    send.hotel_id = this.hotel_data.hotel_id;
    send.status = "find_hotel";
    let send_data = new Array();
    send_data.push(send);

    this.apiserver.postData(send_data).then((result)=>{
      if (Object(result).status=="success"){
        console.log(Object(result).result);

        this.room_typeName = new Array();  
        this.room_typeImgSrc = new Array();
        this.room_typeImgCnt = new Array(); 
        this.slider_list = new Array();  
        this.room_typeImage = new Array();
        this.room_typeId = new Array();

        
        this.total_price = Object(result).result.hotel_total_price;

        for(let i = 0; i < Object(result).result.room_type.length; i++)
        {
          this.room_typeName[i] = Object(result).result.room_type[i].type_value;
          if(Object(result).result.room_type[i].room_img_count > 0){
            this.room_typeImgSrc[i] = Object(result).result.room_type[i].room_img_src;
            this.room_typeImgCnt[i] = Object(result).result.room_type[i].room_img_count;
          }
          this.room_typeId[i] = Object(result).result.room_type[i].roomtype_id;
        }

        for(let i = 0; i < Object(result).result.room_type.length; i++)
        {
          this.room_typeImage[i] = new Array();
          if(Object(result).result.room_type[i].room_img_count > 0){
            for(let j = 0; j < this.room_typeImgCnt[i]; j++)
            {
              this.room_typeImage[i][j] = this.room_typeImgSrc[i] + (j + 1) + ".jpg";
            }
          }
        }

        for(let i = 0; i < Object(result).result.room_type.length; i++)
        {
          this.slider_list[i] = new Array();

          if(Object(result).result.room_type[i].room_img_count > 0){
            for(let j = 0; j < Math.ceil(this.room_typeImgCnt[i] / 4); j++)
            {
              this.slider_list[i][j] = j;
            }
          }
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
