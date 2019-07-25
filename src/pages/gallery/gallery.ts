import { Component, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';



import $ from 'jquery';

/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})

export class GalleryPage {

  public img_src:any;
  public img_list1:any[];
  public img_list2:any[];
  public img_id:any;
  public img_list:any[];
  public img_length:any;

  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams, ) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad GalleryPage');
    // this.img_src = "assets/img/back/1.png";
    // this.img_list1 = ["1", "2", "3", "4"];
    // this.img_list2 = ["5", "6", "7", "8"];
    // this.img_list = ["1", "2", "3", "4", "5", "6", "7", "8"];
    this.order_image_list();
    this.img_id = 1;
    for(var i=1;i<100;i++)
    {
      $("#"+i).css('filter','opacity(65%)');
    }

    $("#1").css('filter','opacity(100%)');



  }

  select_image(list, index)
  {
    for(var i=0;i<this.img_list.length;i++)
    {
      $("#"+i).css('filter','opacity(65%)');
    }
    $("#" + index).css('filter','opacity(100%)');

    // if(index / 4 < 1){
    //   this.img_id = index + 1;
    // }
    // else if(parseInt(list) > 4 && parseInt(list) < 9)
    // {
      this.img_id = index + 1;
    // }

    console.log(index);

    this.img_src = list;
  }

  click_left()
  {
    if(this.img_id % 4 == 1 && this.img_id > 4)
    {
      this.slides.slideTo(this.slides.getActiveIndex() - 1);
    }

    if(this.img_id > 1)
      this.img_id = this.img_id - 1;
    else
      this.img_id = 1;

    

      this.select_image2(this.img_id);
  }

  click_right()
  {

    if(this.img_id % 4 == 0 && this.img_id < this.img_list.length)
    {
      this.slides.slideTo(this.slides.getActiveIndex() + 1);
    }
    if(this.img_id < this.img_list.length)
      this.img_id = this.img_id + 1;
    else
      this.img_id = this.img_list.length;
    this.select_image2(this.img_id);
  }

  select_image2(index)
  {
    console.log(index);
    for(var i=0;i<this.img_list.length;i++)
    {
      $("#"+i).css('filter','opacity(65%)');
    }
    $("#" + (index - 1)).css('filter','opacity(100%)');
    this.img_src = this.img_list[index-1];
  }

  goto_back()
  {
    this.navCtrl.pop();
  }

  order_image_list()
  {
    this.img_list = new Array();
    this.img_list1 = new Array();
    this.img_list = this.navParams.data.navParams;
    console.log(this.navParams.data.navParams);
    this.img_length = this.img_list.length;
    this.img_src = this.img_list[0];
    console.log(this.img_src);
    for(let i = 0; i < Math.ceil(this.img_list.length / 4); i++){
      this.img_list1[i] = i;
    }
  }

}
