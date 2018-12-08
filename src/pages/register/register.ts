import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';
import firebase from "firebase";
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  public validations_form: FormGroup;
  userId: string;

  validation_messages = {
    'email': [
      { type: 'pattern', message: 'Please enter a valid email.' },
      { type: 'required', message: 'Email cannot be empty.' }
    ],     
    'password': [
      { type: 'minlength', message: 'Password must at least be 6 characters long.' },
      { type: 'required', message: 'Password cannot be empty.' },
      { type: 'pattern', message: 'Password must contain letters(both uppercase and lowercase) and numbers.' }
    ]
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, private toast: ToastController) {
      this.validations_form = this.formBuilder.group({
        email: ['', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])],
        password: ['', Validators.compose([Validators.minLength(6), 
          Validators.required,
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])]
        });
        //this.userId = firebase.auth().currentUser.uid;
  }

  async register(){
      firebase.auth().createUserWithEmailAndPassword(this.validations_form.controls['email'].value, 
      this.validations_form.controls['password'].value).then(user =>{
        this.toast.create({
          message: 'Successfully registered',
          duration: 3000
        }).present();
        this.navCtrl.pop();
      }).catch(error =>{
        this.toast.create({
          message: 'Failed to register, please try again',
          duration: 3000
        }).present();
      });
  }

}
