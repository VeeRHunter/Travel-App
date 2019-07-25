import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SignupfullPage } from '../pages/signupfull/signupfull';
import { LoginPage } from '../pages/login/login';
import { HomepagePage } from '../pages/homepage/homepage';
import { FeedCategoryPage } from '../pages/feed-category/feed-category';
import { StayFeedPage } from '../pages/stay-feed/stay-feed';
import { ExpFeedPage } from '../pages/exp-feed/exp-feed';
import { PackFeedPage } from '../pages/pack-feed/pack-feed';
import { StayInformationPage } from '../pages/stay-information/stay-information';
import { StayCheckinPage } from '../pages/stay-checkin/stay-checkin';
import { StayRoomtypePage } from '../pages/stay-roomtype/stay-roomtype';
import { StaytypeDetailPage } from '../pages/staytype-detail/staytype-detail';
import { StayConfirmPage } from '../pages/stay-confirm/stay-confirm';
import { PaymentPage } from '../pages/payment/payment';
import { PaymentSuccessPage } from '../pages/payment-success/payment-success';
import { SearchPage } from '../pages/search/search';
import { NotificationInboxPage } from '../pages/notification-inbox/notification-inbox';
import { AccountSettingPage } from '../pages/account-setting/account-setting';
import { ExpInformationPage } from '../pages/exp-information/exp-information';
import { ExpCheckinPage } from '../pages/exp-checkin/exp-checkin';
import { ExpTypePage } from '../pages/exp-type/exp-type';
import { ExpTypedetailPage } from '../pages/exp-typedetail/exp-typedetail';
import { ExpConfirmPage } from '../pages/exp-confirm/exp-confirm';
import { PackCheckinPage } from '../pages/pack-checkin/pack-checkin';
import { PackConfirmPage } from '../pages/pack-confirm/pack-confirm';
import { PackInformationPage } from '../pages/pack-information/pack-information';
import { PackTypePage } from '../pages/pack-type/pack-type';
import { PackTypedetailPage } from '../pages/pack-typedetail/pack-typedetail';
import { NotificationPage } from '../pages/notification/notification';
import { MybookPage } from '../pages/mybook/mybook';
import { ProfilePage } from '../pages/profile/profile';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { ContactPage } from '../pages/contact/contact';
import { ContactThankPage } from '../pages/contact-thank/contact-thank';
import { ExpEditPage } from '../pages/exp-edit/exp-edit';
import { FavoriteEditPage } from '../pages/favorite-edit/favorite-edit';
import { GalleryPage } from '../pages/gallery/gallery';
import { MybookingDetailPage } from '../pages/mybooking-detail/mybooking-detail';
import { NoticeSettingPage } from '../pages/notice-setting/notice-setting';
import { VideoPreviewPage } from '../pages/video-preview/video-preview';
import { MapsPage } from '../pages/maps/maps';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { LocationTrackerProvider } from '../providers/location-tracker/location-tracker';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { ApiserverProvider } from '../providers/apiserver/apiserver';
import { HttpModule } from '@angular/http';
import { PayPal } from '@ionic-native/paypal';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SignupfullPage,
    LoginPage,
    HomepagePage,
    FeedCategoryPage,
    StayFeedPage,
    ExpFeedPage,
    PackFeedPage,
    StayInformationPage,
    StayCheckinPage,
    StayRoomtypePage,
    StaytypeDetailPage,
    StayConfirmPage,
    PaymentPage,
    PaymentSuccessPage,
    SearchPage,
    NotificationInboxPage,
    AccountSettingPage,
    ExpInformationPage,
    ExpCheckinPage,
    ExpTypePage,
    ExpTypedetailPage,
    ExpConfirmPage,
    PackCheckinPage,
    PackConfirmPage,
    PackInformationPage,
    PackTypePage,
    PackTypedetailPage,
    NotificationPage,
    MybookPage,
    ProfilePage,
    EditProfilePage,
    ContactPage,
    ContactThankPage,
    ExpEditPage,
    FavoriteEditPage,
    GalleryPage,
    MybookingDetailPage,
    NoticeSettingPage,
    VideoPreviewPage,
    MapsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SignupfullPage,
    LoginPage,
    HomepagePage,
    FeedCategoryPage,
    StayFeedPage,
    ExpFeedPage,
    PackFeedPage,
    StayInformationPage,
    StayCheckinPage,
    StayRoomtypePage,
    StaytypeDetailPage,
    StayConfirmPage,
    PaymentPage,
    PaymentSuccessPage,
    SearchPage,
    NotificationInboxPage,
    AccountSettingPage,
    ExpInformationPage,
    ExpCheckinPage,
    ExpTypePage,
    ExpTypedetailPage,
    ExpConfirmPage,
    PackCheckinPage,
    PackConfirmPage,
    PackInformationPage,
    PackTypePage,
    PackTypedetailPage,
    NotificationPage,
    MybookPage,
    ProfilePage,
    EditProfilePage,
    ContactPage,
    ContactThankPage,
    ExpEditPage,
    FavoriteEditPage,
    GalleryPage,
    MybookingDetailPage,
    NoticeSettingPage,
    VideoPreviewPage,
    MapsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    LocationTrackerProvider,
    BackgroundGeolocation,    
    ScreenOrientation,
    ApiserverProvider,
    PayPal,
  ]
})
export class AppModule {}
