import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomepagePage } from '../homepage/homepage';
import { SearchPage } from '../search/search';
import { NotificationInboxPage } from '../notification-inbox/notification-inbox';
import { AccountSettingPage } from '../account-setting/account-setting';

import { MybookingDetailPage } from '../mybooking-detail/mybooking-detail';

/**
 * Generated class for the MybookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mybook',
  templateUrl: 'mybook.html',
})
export class MybookPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MybookPage');
  }

  goto_bookdetail()
  {
    this.navCtrl.push(MybookingDetailPage);
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

}
