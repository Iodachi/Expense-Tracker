import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import _ from 'lodash';
import { TransactionlistService } from '../../services/transactionlist.service';

const EXPENSE_CATEGORIES = ["Food & Drinks", "Rents & Bills", "Shopping & Groceries", "Transport", "Entertainment", "Healthcare", "Others"];
const INCOME_CATEGORIES = ["Salary", "Interests", "Others"];

@IonicPage()
@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html',
})
export class OverviewPage {
  spendingGraph: any;
  incomeGraph: any;
  expenseList = [];
  incomeList = [];
  @ViewChild('spendingGraphElement') spendingGraphElement;
  @ViewChild('incomeGraphElement') incomeGraphElement;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private transactionListService: TransactionlistService) {
  }

  ionViewWillEnter() {
    this.transactionListService.getExpenseList().then((res: any) => {
      this.expenseList = res;

      const groupedBy = _(this.expenseList)
        .groupBy('category')
        .map((objs, key) => (
          _.sumBy(objs, 'amount')))
        .value();

      this.spendingGraph = new Chart(this.spendingGraphElement.nativeElement, {

        type: 'doughnut',
        options: {
          legend: {
            display: false
          }
        },
        data: {
          labels: EXPENSE_CATEGORIES,
          datasets: [{
            label: 'precentage of spending',
            data: groupedBy,
            backgroundColor: [
              'rgba(189, 171, 195, 0.8)',
              'rgba(220, 179, 187, 0.8)',
              'rgba(237, 211, 180, 0.8)',
              'rgba(250, 242, 185, 0.8)',
              'rgba(203, 228, 234, 0.8)',
              'rgba(157, 207, 213, 0.8)',
              'rgba(125, 190, 182, 0.8)',
            ],
            hoverBackgroundColor: [
              'rgba(189, 171, 195, 1)',
              'rgba(220, 179, 187, 1)',
              'rgba(237, 211, 180, 1)',
              'rgba(250, 242, 185, 1)',
              'rgba(203, 228, 234, 1)',
              'rgba(157, 207, 213, 1)',
              'rgba(125, 190, 182, 1)',
            ]
          }],
        }
      })
    })

    this.transactionListService.getIncomeList().then((res: any) => {
      this.incomeList = res;

      const groupedBy = _(this.incomeList)
        .groupBy('category')
        .map((objs, key) => (
          _.sumBy(objs, 'amount')))
        .value();

      this.incomeGraph = new Chart(this.incomeGraphElement.nativeElement, {

        type: 'doughnut',
        options: {
          legend: {
            display: false
          }
        },
        data: {
          labels: INCOME_CATEGORIES,
          datasets: [{
            label: 'precentage of spending',
            data: groupedBy,
            backgroundColor: [
              'rgba(203, 228, 234, 0.8)',
              'rgba(157, 207, 213, 0.8)',
              'rgba(125, 190, 182, 0.8)',
            ],
            hoverBackgroundColor: [
              'rgba(203, 228, 234, 1)',
              'rgba(157, 207, 213, 1)',
              'rgba(125, 190, 182, 1)',
            ]
          }],
        }
      })
    })
  }
}
