import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { Injectable, NgZone } from '@angular/core';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';

import $ from 'jquery';

// import {
//   GoogleMaps,
//   GoogleMap,
//   GoogleMapsEvent,
//   GoogleMapOptions,
//   CameraPosition,
//   MarkerOptions,
//   Marker
//  } from '@ionic-native/google-maps';
/**
 * Generated class for the MapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {

  map: any = null;
  mapElement: HTMLElement;
  public watch: any;
  public lat: number = 0;
  public lng: number = 0;
  public lat_lng = { "lat": 0, "lng": 0 };
  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation, public zone: NgZone,
    public backgroundGeolocation: BackgroundGeolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapsPage');


    // $('#messagebox').hide();
    // $('#map').show();
    // $('#close_icon').show();
    this.mapElement = document.getElementById('map');
    console.log(this.mapElement);


    this.loadMap();

    // this.loadMap();
    // $('#messagebox').show();
    // $('#map').hide();
    // $('#close_icon').hide();

  }


  loadMap() {

    // this.lat_lng.lat = 18.8023;
    // this.lat_lng.lng = 98.970876;
    this.lat_lng.lat = this.navParams.data.navParams.lat;
    this.lat_lng.lng = this.navParams.data.navParams.lng;

    console.log(this.lat_lng);

    this.geolocation.getCurrentPosition().then((position) => {
      // console.log(position);
      let latLng = new google.maps.LatLng(this.lat_lng.lat, this.lat_lng.lng);

      let mapOptions = {
        center: latLng,
        zoom: 20,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement, mapOptions);
      let content = "";
      this.addMarker(this.lat_lng, content);
    }, (err) => {
      console.log(err);
    });
    // this.addMarker1();

  }
  addMarker1() {

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(13.736014, 100.57864)
    });

    let content = "<h4>Information!</h4>";

    this.addInfoWindow(marker, content);

  }
  addMarker(posInfo, info) {
    let position = new google.maps.LatLng(posInfo['lat'], posInfo['lng']);
    var that = this;
    let marker = new google.maps.Marker({
      map: that.map,
      animation: google.maps.Animation.DROP,
      label: info,
      position: position,
      icon: 'assets/img/map_marker.png',
      //  icon: 'md-pin',
    });
    //  let markerInfo = '<b>' + info + '</b>';
    //  this.addInfoWindow(marker, markerInfo);
  }
  addInfoWindow(marker, content) {

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }

  goto_back() {
    this.navCtrl.pop();
  }
}
