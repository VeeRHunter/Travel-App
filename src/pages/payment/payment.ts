import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaymentSuccessPage } from '../payment-success/payment-success';


import { HomepagePage } from '../homepage/homepage';
import { SearchPage } from '../search/search';
import { NotificationInboxPage } from '../notification-inbox/notification-inbox';
import { AccountSettingPage } from '../account-setting/account-setting';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';


/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  public year_list:any[];

  currencies = ['EUR', 'USD'];
  payPalEnvironment: string = 'payPalEnvironmentSandbox';
  public payment_Data = {"act_price":"", "check_in":""};

  public paynow:boolean;
  public payafter:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public payPal: PayPal) {
  }

  ionViewDidLoad() {
    this.year_list = new Array();
    console.log('ionViewDidLoad PaymentPage');
    for(var i = 2017; i > 1899; i--)
    {
      let push_param = i;
      this.year_list.push(push_param);
    }

    this.payment_Data.act_price = this.navParams.data.navParams.act_price;
    this.payment_Data.check_in = this.navParams.data.navParams.act_checkin;
    
    this.paynow = false;
    this.payafter = false;

    console.log(this.navParams.data.navParams);


  this.payPal.init({
    // PayPalEnvironmentProduction: 'AXg409-ZD7lFcgk2JdHkLkggX8u7LnT7cfkGL2AG0y7bx5OAvOmErpKKz5D68kzXRxbfe_KRlFf681rk',
    PayPalEnvironmentProduction: 'AZR63QnYJTBdGOXUuY7nWj3ZlizuL1XxGXql_4G2ATZJa3VhFOS1MfGx4NZmVOiHcKV-JA1-9dul5cTI',
    PayPalEnvironmentSandbox: ''
  }).then(() => {

      let payment: PayPalPayment = new PayPalPayment(this.payment_Data.act_price, 'THB', 'TV', 'sale');

      this.payPal.prepareToRender(this.payPalEnvironment, new PayPalConfiguration({})).then(() => {
        this.payPal.renderSinglePaymentUI(payment).then((response) => {
          alert(`Successfully paid. Status = ${response.response.state}`);
          console.log(response);
        }, () => {
          console.error('Error or render dialog closed without being successful');
        });
      }, () => {
        console.error('Error in configuration');
      });
    }, () => {
      console.error('Error in initialization, maybe PayPal isn\'t supported or something else');
    });

  }

  


  goto_stay_payment_success()
  {
    this.navCtrl.push(PaymentSuccessPage);
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

  paynow_click()
  {
      this.paynow = !this.paynow;
      if(this.payafter){
        this.payafter = !this.payafter;
      }
  }
  payafter_click()
  {
    this.payafter = !this.payafter;
    if(this.paynow){
      this.paynow = !this.paynow;
    }
  }

}
