import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CalendarModal, CalendarModalOptions, CalendarResult } from "ion2-calendar";
import { AlertController } from 'ionic-angular';

import { Validators, FormBuilder, FormGroup} from '@angular/forms';
import { HomePage } from '../home/home';
import firebase from 'firebase';
import { TransactionEditService } from '../../services/transactionedit.service';
import { Transactions } from '../../models/Transactions';
import { CategorylistService } from '../../services/categorylist.service';

@IonicPage()
@Component({
  selector: 'page-edit-transaction',
  templateUrl: 'edit-transaction.html',
})
export class EditTransactionPage {
  item: Transactions;
  public validations_form: FormGroup;
  date: string = new Date().toISOString().substring(0, 10);
  category: string;
  amount: number;
  description: string;
  type: string = "Expense";
  userId: string;

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
    private categoryListService: CategorylistService) {

      this.item = navParams.get('item'); 
      this.category = this.item.category;
      this.type = this.item.type ? "Income" : "expense";
      this.date = this.item.date;
      this.amount = this.item.amount;
      this.description = this.item.description;

      this.validations_form = this.formBuilder.group({
        amount: [this.amount, Validators.compose([Validators.required, 
          Validators.min(0)])],
        description: [this.description, Validators.required]
      });

      this.userId = firebase.auth().currentUser.uid;
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
        if(type == "done"){
          this.date = date.string;
        }
      })
    }

  editTransaction() {
    firebase.database().ref('users/' + this.userId + '/transaction-list').child(this.item.key).update({
      amount : Number(this.validations_form.controls['amount'].value),
      category : this.category,
      date : this.date,
      description : this.validations_form.controls['description'].value,
      icon : this.transactionEditService.setIconName(this.category, 
        this.transactionEditService.setType(this.type)),
      type : this.transactionEditService.setType(this.type)
    })

    this.navCtrl.pop();
  }

}
