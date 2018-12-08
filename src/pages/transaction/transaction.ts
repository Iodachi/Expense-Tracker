import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CalendarModal, CalendarModalOptions, CalendarResult } from "ion2-calendar";
import { AlertController } from 'ionic-angular';

import { Validators, FormBuilder, FormGroup} from '@angular/forms';
import { HomePage } from '../home/home';
import firebase from 'firebase';
import { TransactionEditService } from '../../services/transactionedit.service';
import { MapPage } from '../map/map';
import { Geolocation } from '@ionic-native/geolocation';
import { CategorylistService } from '../../services/categorylist.service';

@IonicPage()
@Component({
  selector: 'page-transaction',
  templateUrl: 'transaction.html',
})
export class TransactionPage {
  public validations_form: FormGroup;
  date: string = new Date().toISOString().substring(0, 10);
  category: string = "Others";
  type: string = "expense";
  userId: string;
  lat: any;
  long: any;

  expenseCategory = [];
  incomeCategory = [];

  validation_messages = {
    'amount': [
      { type: 'min', message: 'Please enter a valid number > 0.' },
      { type: 'required', message: 'Please enter the amount.' }
    ],
    'description': [
      { type: 'required', message: 'Please enter a description.' }
    ]
}

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public alertCtrl: AlertController, public modalCtrl: ModalController, 
    private formBuilder: FormBuilder, private transactionEditService: TransactionEditService,
    private geolocation: Geolocation, private categoryListService: CategorylistService) {

      this.validations_form = this.formBuilder.group({
        amount: ['', Validators.compose([Validators.required, 
          Validators.min(0)])],
        description: ['', Validators.required]
      });

      this.userId = firebase.auth().currentUser.uid;
      this.getLocation();
    }


  ionViewWillEnter() {
    this.categoryListService.getExpenseCategory().then((res: any) => {
      this.expenseCategory = res;
    })

    this.categoryListService.getIncomeCategory().then((res: any) => {
      this.incomeCategory = res;
    })
  }

    openCalendar() {
      const options: CalendarModalOptions = {
        title: 'Select Date',
        canBackwardsSelected: true
      };
      let myCalendar =  this.modalCtrl.create(CalendarModal, {
        options: options
      });
  
      myCalendar.present();
  
      myCalendar.onDidDismiss((date: CalendarResult, type: string) => {
        console.log(date);
        if(type == "done"){
          this.date = date.string;
        }
      })
    }

  newTransaction() {
    const ref = firebase.database().ref('users/' + this.userId + '/transaction-list').push({
      amount : Number(this.validations_form.controls['amount'].value),
      category : this.category,
      date : this.date,
      description : this.validations_form.controls['description'].value,
      icon : this.transactionEditService.setIconName(this.category, 
        this.transactionEditService.setType(this.type)),
      type : this.transactionEditService.setType(this.type),
      lat: this.lat,
      long: this.long
    }).key;

    firebase.database().ref('users/' + this.userId + '/transaction-list').child(ref).update({
      key : ref
    });

    this.navCtrl.setRoot(HomePage);
  }

  viewMap(){
    this.navCtrl.push(MapPage);
  }

  getLocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.long = resp.coords.longitude;
     }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
}
