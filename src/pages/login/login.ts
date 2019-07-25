import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { HomepagePage } from '../homepage/homepage';
import { ApiserverProvider } from '../../providers/apiserver/apiserver';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public userData = {"user_id":"", "firstname":"", "lastname":"", "phonenumber":"", "email":"", "password":"", "confirmpass":"", "status":""};

  public check_email : boolean;
  public check_pass : boolean;

  public main_password: boolean;
  public e_mail: boolean;

  public warnning_email:any;
  public warnning_pass:any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl:LoadingController, 
    public toastCtrl: ToastController, public apiserver:ApiserverProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.check_email = false;
    this.check_pass = false;
    this.main_password = false;
    this.e_mail = false;

    this.warnning_email = "Email type error. Please try again.";
    this.warnning_pass = "Password type error. Please try again";
  }

  goto_homepage()
  {
    this.navCtrl.push(HomepagePage);
  }

  goto_back()
  {
    this.navCtrl.pop();
  }

  goto_login()
  {
    // this.navCtrl.push(SigninSuccessPage,{navParams:this.userData});
    
    if(!this.check_email)
    {
      let toast = this.toastCtrl.create({
        message:"please check email address again!",
        duration:1000
      })
      toast.present();
    }
    if(!this.check_pass)
    {
      let toast = this.toastCtrl.create({
        message:"please check password again!",
        duration:1000
      })
      toast.present();
    }
    
    if(this.check_email && this.check_pass){
      console.log(this.userData);
      let loading = this.loadingCtrl.create({
        content:"Please Wait..."
      });
      loading.present();
      let status = "login";
      this.userData.status  = status;
      
      let send_data = new Array();
      send_data.push(this.userData);
      this.apiserver.postData(send_data).then((result)=>{
        console.log(result);
        loading.dismiss();
        if (Object(result).status=="success"){
          // console.log(result);
          this.userData.user_id = Object(result).userid;
          this.userData.lastname = Object(result).lastname;
          this.userData.firstname = Object(result).firstname;
          console.log(Object(result).email);
          this.navCtrl.push(HomepagePage);
        } else {
          this.warnning_email = Object(result).email_warn;
          this.warnning_pass = Object(result).pass_warn;
          if(this.warnning_email != ""){
            this.e_mail = true;
          }else{
            this.e_mail = false;
          }
          if(this.warnning_pass != ""){
            this.main_password = true;
          }else{
            this.main_password = false;
          }
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
    this.warnning_email = "Email type error. please try again.";
  }

  passChange()
  {
    if(this.userData.password.length > 8)
    {
      this.check_pass = true;
    }
    else{
      this.check_pass = false;
    }
    this.main_password = false;
    this.warnning_pass = "password type error. please try again";
  }

  detect_login()
  {
    if(this.check_email && this.check_pass)
    {
      this.navCtrl.push(HomepagePage,{navParams:this.userData});
    }
    else if(!this.check_email)
    {
      let toast = this.toastCtrl.create({
        message:"please check email address again!",
        duration:1000
      })
      toast.present();
    }
    else if(!this.check_pass)
    {
      let toast = this.toastCtrl.create({
        message:"please check password again!",
        duration:1000
      })
      toast.present();
    }
    else
    {
      let toast = this.toastCtrl.create({
        message:"please check email address and password again!",
        duration:1000
      })
      toast.present();
    }
  }

}
