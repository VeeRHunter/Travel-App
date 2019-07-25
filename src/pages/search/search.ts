import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import $ from 'jquery';
import { HomepagePage } from '../homepage/homepage';
import { NotificationInboxPage } from '../notification-inbox/notification-inbox';
import { AccountSettingPage } from '../account-setting/account-setting';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad SearchPage');
    // $('#stay').css('background-color','#4c4c4e');
    // $('#stay').css('border-top-left-radius','5px');
    // $('#stay_detail').css('background-color','#4c4c4e');
    // $('#stay_detail').css('color','white');
    this.click_stay();

    $('#package').css('border-top-right-radius','5px');
  }

  ngOnInit()
  {
    // console.log('ionViewDidLoad SearchPage');
    // $('#stay').css('background-color','#4c4c4e');
    // $('#stay').css('border-top-left-radius','5px');
    // $('#stay_detail').css('background-color','#4c4c4e');
    // $('#stay_detail').css('color','white');
    this.click_stay();

    $('#package').css('border-top-right-radius','5px');

  }

  click_stay()
  {
    // this.set_stay();
    // this.unset_exp();
    // this.unset_pac();
    // $('#search_stay').addClass("segment-activated");
    // console.log('ionViewDidLoad SearchPage');
  }

  click_exp()
  {
    // this.set_exp();
    // this.unset_pac();
    // this.unset_stay();
    // $('#search_stay').remove("segment-activated");
    // console.log('ionViewDidLoad SearchPage');
  }

  click_pak()
  {
    // this.set_pac();
    // this.unset_exp();
    // this.unset_stay();
    // $('#search_stay').remove("segment-activated");
  }

  set_stay()
  {
    $('#stay').css('background-color','#4c4c4e');
    $('#stay_detail').css('background-color','#4c4c4e');
    $('#stay_detail').css('color','white');
  }

  unset_stay()
  {
    $('#stay').css('background-color','#f9f9f9');
    $('#stay_detail').css('background-color','#f9f9f9');
    $('#stay_detail').css('color','black');
  }

  set_exp()
  {
    $('#experience').css('background-color','#4c4c4e');
    $('#experience_exp').css('background-color','#4c4c4e');
    $('#experience_exp').css('color','white');
  }

  unset_exp()
  {
    $('#experience').css('background-color','#f9f9f9');
    $('#experience_exp').css('background-color','#f9f9f9');
    $('#experience_exp').css('color','black');
  }

  set_pac()
  {
    $('#package').css('background-color','#4c4c4e');
    $('#package_pac').css('background-color','#4c4c4e');
    $('#package_pac').css('color','white');
  }

  unset_pac()
  {
    $('#package').css('background-color','#f9f9f9');
    $('#package_pac').css('background-color','#f9f9f9');
    $('#package_pac').css('color','black');
  }

  click_search()
  {
    
  }

  goto_homepage()
  {
    this.navCtrl.push(HomepagePage);
  }

  click_search_button()
  {
  }

  click_notification_button()
  {
    this.navCtrl.push(NotificationInboxPage);
  }

  click_account_button()
  {
    this.navCtrl.push(AccountSettingPage);
  }

}
