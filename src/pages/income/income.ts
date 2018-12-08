import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TransactionlistService } from '../../services/transactionlist.service';

@IonicPage()
@Component({
  selector: 'page-income',
  templateUrl: 'income.html',
})
export class IncomePage {
  list = [];
  groupedList = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private transactionListService: TransactionlistService) {
  }

  ionViewWillEnter() {
    this.transactionListService.getIncomeList().then((res: any) => {
      this.list = res;
      this.groupList(this.list);
    })
  }

  groupList(list){
    let sortedList =  list.sort((a, b) => {
      if(new Date(a.date) > new Date(b.date)) return -1;
      if(new Date(a.date) < new Date(b.date)) return 1;
      return 0;
    });
    let currentDate = false;
    let currentList = [];

    sortedList.forEach((value, index) => {
      if(value.date != currentDate){
        currentDate = value.date;

        let newGroup = {
          date: currentDate,
          valueList: []
        }

        currentList = newGroup.valueList;
        this.groupedList.push(newGroup);
      }
      currentList.push(value);
    });
  }

  getItems(ev: any) {
    const val = ev.target.value;

    if (val && val.trim() != '') {
      var filterList = [];
      this.groupedList.filter((item) => {
          item.valueList.forEach((value, index) => {
            if(value.description.toLowerCase().indexOf(val.toLowerCase()) > -1)
              filterList.push(item);
          })
        })

      this.groupedList = [];
      this.groupedList = filterList;
    }
  }
}
