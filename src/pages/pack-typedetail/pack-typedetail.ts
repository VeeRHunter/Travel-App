import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PackConfirmPage } from '../pack-confirm/pack-confirm';
import { HomepagePage } from '../homepage/homepage';
import { SearchPage } from '../search/search';
import { NotificationInboxPage } from '../notification-inbox/notification-inbox';
import { AccountSettingPage } from '../account-setting/account-setting';
import { GalleryPage } from '../gallery/gallery';

/**
 * Generated class for the PackTypedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pack-typedetail',
  templateUrl: 'pack-typedetail.html',
})
export class PackTypedetailPage {

  public image_list:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PackTypedetailPage');
    this.image_list = ["hei1", "hei4", "hei2"];
  }

  goto_back()
  {
    this.navCtrl.pop();
  }
  
  goto_pack_confirm()
  {
    this.navCtrl.push(PackConfirmPage);
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

  goto_gallery()
  {
    this.navCtrl.push(GalleryPage);
  }


}
