import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExpConfirmPage } from '../exp-confirm/exp-confirm';
import { GalleryPage } from '../gallery/gallery';

/**
 * Generated class for the ExpTypedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exp-typedetail',
  templateUrl: 'exp-typedetail.html',
})
export class ExpTypedetailPage {

  public recommended_list:any[];
  public image_list:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpTypedetailPage');
    this.recommended_list = ["hei1", "hei4", "hei2"];
  }

  goto_back()
  {
    this.navCtrl.pop();
  }

  goto_exp_confirm()
  {
    this.navCtrl.push(ExpConfirmPage);
  }

  goto_gallery()
  {
    this.navCtrl.push(GalleryPage);
  }

}
