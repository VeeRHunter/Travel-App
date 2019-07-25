import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { HomepagePage } from '../homepage/homepage';
import { SearchPage } from '../search/search';
import { NotificationInboxPage } from '../notification-inbox/notification-inbox';
import { AccountSettingPage } from '../account-setting/account-setting';

/**
 * Generated class for the NoticeSettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notice-setting',
  templateUrl: 'notice-setting.html',
})
export class NoticeSettingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticeSettingPage');
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
  click_save()
  {
    
  }

}
