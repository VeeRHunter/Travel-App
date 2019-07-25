import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StayFeedPage } from '../stay-feed/stay-feed';
import { ExpFeedPage } from '../exp-feed/exp-feed';
import { PackFeedPage } from '../pack-feed/pack-feed';

import { HomepagePage } from '../homepage/homepage';
import { SearchPage } from '../search/search';
import { NotificationInboxPage } from '../notification-inbox/notification-inbox';
import { AccountSettingPage } from '../account-setting/account-setting';

/**
 * Generated class for the FeedCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed-category',
  templateUrl: 'feed-category.html',
})
export class FeedCategoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedCategoryPage');
  }

  goto_stay_feed()
  {
    this.navCtrl.push(StayFeedPage);
  }

  goto_exp_feed()
  {
    this.navCtrl.push(ExpFeedPage);
  }

  goto_pack_feed()
  {
    this.navCtrl.push(PackFeedPage);
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

  click_menu_button()
  {
    this.navCtrl.pop();
  }

}
