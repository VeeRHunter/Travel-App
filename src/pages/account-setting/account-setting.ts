import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomepagePage } from '../homepage/homepage';
import { SearchPage } from '../search/search';
import { NotificationInboxPage } from '../notification-inbox/notification-inbox';
import { NotificationPage } from '../notification/notification';
import { MybookPage } from '../mybook/mybook';
import { ProfilePage } from '../profile/profile';
import{ LoginPage } from '../login/login';
import { HomePage } from '../home/home';

import { NoticeSettingPage } from '../notice-setting/notice-setting';


/**
 * Generated class for the AccountSettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account-setting',
  templateUrl: 'account-setting.html',
})
export class AccountSettingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountSettingPage');
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
  }

  goto_profile()
  {
    this.navCtrl.push(ProfilePage);
  }

  goto_mybook()
  {
    this.navCtrl.push(MybookPage);
  }

  goto_notification()
  {
    this.navCtrl.push(NoticeSettingPage);
  }

  goto_login()
  {
    this.navCtrl.push(HomePage);
  }
}
