import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomepagePage } from '../homepage/homepage';
import { SearchPage } from '../search/search';
import { AccountSettingPage } from '../account-setting/account-setting';



/**
 * Generated class for the NotificationInboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notification-inbox',
  templateUrl: 'notification-inbox.html',
})
export class NotificationInboxPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationInboxPage');
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
  }

  click_account_button()
  {
    this.navCtrl.push(AccountSettingPage);
  }

}
