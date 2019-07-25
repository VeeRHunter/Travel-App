import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import $ from 'jquery';
/**
 * Generated class for the VideoPreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video-preview',
  templateUrl: 'video-preview.html',
})
export class VideoPreviewPage {

  public recommened_item:any;
  public image_src:any;
  public video_src:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoPreviewPage');
    this.recommened_item = ["1", "2", "1"];
    this.image_src = "assets/1.png";
    this.video_src = "assets/video/1.mp4";
  }

  video_click(index)
  {
    this.image_src = "assets/" + index + ".png";
    this.video_src = "assets/video/" + index + ".mp4";
    // $("#logo-video > source").attr("src", "assets/video/2.mp4"​​​​);​
    let video = $("#logo-video");
    // video.attr('poster',)
    video.find("source").attr("src", this.video_src);
    video.get(0).load();
    console.log(this.video_src);
  }

  goto_back()
  {
    this.navCtrl.pop();
  }

}
