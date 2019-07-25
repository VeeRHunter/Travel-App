import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PackCheckinPage } from '../pack-checkin/pack-checkin';

import { HomepagePage } from '../homepage/homepage';
import { SearchPage } from '../search/search';
import { NotificationInboxPage } from '../notification-inbox/notification-inbox';
import { AccountSettingPage } from '../account-setting/account-setting';

import { MapsPage } from '../maps/maps';

/**
 * Generated class for the PackInformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pack-information',
  templateUrl: 'pack-information.html',
})
export class PackInformationPage {

  public image_list:any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PackInformationPage');
    this.image_list = ["hei1", "hei4", "hei2"];
  }

  goto_pack_checkin()
  {
    this.navCtrl.push(PackCheckinPage);
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

  goto_map()
  {
    this.navCtrl.push(MapsPage);
  }

  goto_back()
  {
    this.navCtrl.pop();
  }
}
