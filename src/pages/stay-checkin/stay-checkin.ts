import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StayRoomtypePage } from '../stay-roomtype/stay-roomtype';

/**
 * Generated class for the StayCheckinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stay-checkin',
  templateUrl: 'stay-checkin.html',
})
export class StayCheckinPage {


  public event = {
    checkin: '2017-10-06',
    checkout: '2017-10-06',
    timeEnds: '1990-02-20'
  }

  public adults:any;
  public child:any;
  public infants:any;
  public pet:any;

  public hotel_data = {"hotel_id":"", "hotel_name":"", "hotel_address":"", "hotel_checkin":"", "hotel_checkout":"", "lat":"", "lng":""};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log(this.navParams.data.navParams);
    this.adults="Adults1";
    this.child = "Child1";
    this.infants = "Infants1";
    this.pet = "Pet1";

    this.hotel_data.hotel_id = this.navParams.data.navParams.hotel_id;
    this.hotel_data.hotel_address = this.navParams.data.navParams.hotel_address;
    this.hotel_data.hotel_name = this.navParams.data.navParams.hotel_name;
    this.hotel_data.lat = this.navParams.data.navParams.lat;
    this.hotel_data.lng = this.navParams.data.navParams.lng;
    // this.hotel_data.
  }
  goto_back()
  {
    this.navCtrl.pop();
  }

  goto_stay_roomtype()
  {
    this.hotel_data.hotel_checkin = this.event.checkin;
    this.hotel_data.hotel_checkout = this.event.checkout;
    this.navCtrl.push(StayRoomtypePage, {navParams:this.hotel_data});
  }

}
