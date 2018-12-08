import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google: any;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  @ViewChild('map') mapRef: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    this.showMap();
    this.getLocation();
  }

  showMap() {
    const options = {
      zoom: 15
    }

    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  }

  getLocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      this.map.setCenter(latLng);

      // this.map.addMarker({
      //   position: latLng,
      //   visible: true
      // })
     }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  done(){
    this.navCtrl.pop();
  }
}
