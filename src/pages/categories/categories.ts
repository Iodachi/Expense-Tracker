import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CategorylistService } from '../../services/categorylist.service';
import { NewCategoryPage } from '../new-category/new-category';

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {
  expenseCategories = [];
  incomeCategories = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private categoryListService: CategorylistService,
    public alertCtrl: AlertController) {
  }

  ionViewDidEnter() {
    this.categoryListService.getExpenseCategory().then((res: any) => {
      this.expenseCategories = res;
    })

    this.categoryListService.getIncomeCategory().then((res: any) => {
      this.incomeCategories = res;
    })
  }
  
  deleteCategory(item){
    //unfinished function
  }

  newCategory(){
    this.navCtrl.push(NewCategoryPage);
  }
}