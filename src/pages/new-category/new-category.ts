import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Categories } from '../../models/Categories';
import { CategorylistService } from '../../services/categorylist.service';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-new-category',
  templateUrl: 'new-category.html',
})
export class NewCategoryPage {
  validations_form: FormGroup;
  name: string;
  type: boolean = false;
  userId: string;

  validation_messages = {
    'name': [
      { type: 'required', message: 'Please enter a name.' }
    ]
}

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder,
    private categoryListService: CategorylistService) {
      this.validations_form = this.formBuilder.group({
        name: ['', Validators.required]
      });
      this.userId = firebase.auth().currentUser.uid;
  }

  newCategory(){
    const ref = firebase.database().ref('users/' + this.userId + '/category-list').push({
      name : this.validations_form.controls['name'].value,
      icon : "help",
      type : this.type
    }).key;

    firebase.database().ref('users/' + this.userId + '/category-list').child(ref).update({
      key : ref
    });

    this.navCtrl.pop();
  }

}
