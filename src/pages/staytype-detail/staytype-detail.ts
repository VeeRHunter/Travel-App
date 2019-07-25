import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StayConfirmPage } from '../stay-confirm/stay-confirm';

/**
 * Generated class for the StaytypeDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-staytype-detail',
  templateUrl: 'staytype-detail.html',
})
export class StaytypeDetailPage {

  public recommened_item1:any[];
  public recommened_item2:any[];
  public recommened_item3:any[];

  public hotel_data = {"hotel_id":"", "hotel_name":"", "hotel_address":"", "hotel_checkin":"", "hotel_checkout":"", "lat":"", "lng":"", "total_price":"", "total_vat":""};
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaytypeDetailPage');
    this.recommened_item1 = ["7", "6", "3"];
    this.recommened_item2 = ["10", "11", "8"];
    this.recommened_item3 = ["3", "5", "9"];

    this.hotel_data.hotel_id = this.navParams.data.navParams.hotel_id;
    this.hotel_data.hotel_name = this.navParams.data.navParams.hotel_name;
    this.hotel_data.hotel_address = this.navParams.data.navParams.hotel_address;
    this.hotel_data.hotel_checkin = this.navParams.data.navParams.hotel_checkin;
    this.hotel_data.hotel_checkout = this.navParams.data.navParams.hotel_checkout;
    this.hotel_data.lat = this.navParams.data.navParams.lat;
    this.hotel_data.lng = this.navParams.data.navParams.lng;
    this.hotel_data.total_price = this.navParams.data.navParams.total_price;
    this.hotel_data.total_vat = this.navParams.data.navParams.total_vat;
  }

  goto_back()
  {
    this.navCtrl.pop();
  }
  goto_stay_confirm()
  {
    this.navCtrl.push(StayConfirmPage);
  }
}
