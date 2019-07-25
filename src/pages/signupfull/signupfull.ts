import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { HomepagePage } from '../homepage/homepage';
import { SearchPage } from '../search/search';
import { NotificationInboxPage } from '../notification-inbox/notification-inbox';
import { AccountSettingPage } from '../account-setting/account-setting';
import { ApiserverProvider } from '../../providers/apiserver/apiserver';

import { LoginPage } from '../login/login';

/**
 * Generated class for the SignupfullPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signupfull',
  templateUrl: 'signupfull.html',
})
export class SignupfullPage {

  public userData = {"firstname":"", "lastname":"", "phonenumber":"", "email":"", "password":"", "confirmpass":"", "status":""};


  public check_first : boolean;
  public check_last : boolean;
  public check_phone : boolean;
  public check_email : boolean;
  public check_pass : boolean;
  public check_confirm_pass : boolean;

  public first_name: boolean;
  public last_name: boolean;
  public phone_num: boolean;
  public e_mail: boolean;
  public main_password: boolean;
  public confirm_password: boolean;


  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl:LoadingController, 
    public toastCtrl: ToastController, public apiserver:ApiserverProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupfullPage');
    this.check_confirm_pass = false;
    this.check_email = false;
    this.check_first = false;
    this.check_last = false;
    this.check_pass = false;
    this.check_phone = false;

    this.first_name = false;
    this.last_name = false;
    this.phone_num = false;
    this.e_mail = false;
    this.main_password = false;
    this.confirm_password = false;
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

  goto_back()
  {
    this.navCtrl.pop();
  }

  signup()
  {
    
    this.confirm_passChange();
    if(!this.check_confirm_pass)
    {
      this.confirm_password = true;
    }
    if(!this.check_first)
    {
      this.first_name = true;
    }
    if(!this.check_last)
    {
      this.last_name = true;
    }
    if(!this.check_pass)
    {
      this.main_password = true;
    }
    if(!this.check_phone)
    {
      this.phone_num = true;
    }
    if(!this.check_email)
    {
      this.e_mail = true;
    }
    
    if(this.check_first && this.check_last && this.check_phone && this.check_email && this.check_pass && this.check_confirm_pass){
        console.log(this.userData);
        let loading = this.loadingCtrl.create({
          content:"Please Wait..."
        });
        loading.present();
        let status = "register";
        this.userData.status  = status;

        let send_data = new Array();
        send_data.push(this.userData);
        this.apiserver.postData(send_data).then((result)=>{
          loading.dismiss();
          console.log(typeof result);
          if (Object(result).status=="success"){
            console.log(result);
            this.userData.email = Object(result).email;
            console.log(Object(result).email);
            this.navCtrl.push(LoginPage);
          } else {
            let toast = this.toastCtrl.create({
              message:"Invalid Username or Password",
              duration:2000
            })
            toast.present();
          };    
          
        }, (err) =>{
          let toast = this.toastCtrl.create({
            message:"No Network",
            duration:2000
          })
          toast.present();
          loading.dismiss();
        });  
    }
  }

  passChange()
  {
    if(this.userData.password.length > 8)
    {
      var regex = new RegExp("^[a-z0-9]+$");
      if (!regex.test(this.userData.password)) {
          this.check_pass = false;
      }
      else{
        this.check_pass = true;
      }
    }
    else{
      this.check_pass = false;
    }
    this.main_password = false;
  }

  fnameChange()
  {
    var regex = new RegExp("^[a-zA-Z]+$");
    if (!regex.test(this.userData.firstname)) {
        this.check_first = false;
    }
    else{
      this.check_first = true;
    }
    this.first_name = false;
  }

  lnameChange()
  {
    var regex = new RegExp("^[a-zA-Z]+$");
    if (!regex.test(this.userData.lastname)) {
        this.check_last = false;
    }
    else{
      this.check_last = true;
    }
    this.last_name = false;
  }

  emailChange()
  {
    var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i

    if(!pattern.test(this.userData.email))
    {
      this.check_email = false;
    }​
    else
    {
      this.check_email = true;
    }
    this.e_mail = false;
  }

  phoneChange()
  {
    var pattern = new RegExp("^[0-9]+$");

    if(!pattern.test(this.userData.phonenumber))
    {
      this.check_phone = false;
    }​
    else
    {
      this.check_phone = true;
    }
    this.phone_num = false;
  }

  confirm_passChange()
  {
    // var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i

    if(this.userData.password != this.userData.confirmpass)
    {
      this.check_confirm_pass = false;
    }​
    else
    {
      this.check_confirm_pass = true;
    }
    this.confirm_password = false;
  }

}
