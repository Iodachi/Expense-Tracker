import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class CategorylistService {

  userId: string;

  constructor() {
      this.userId = firebase.auth().currentUser.uid;
  }

  getCategoryList() {
    var promise = new Promise((resolve, reject) => {
        firebase.database().ref('users/' + this.userId + '/category-list')
        .once('value', (snapshot) => {
            let trans = snapshot.val();
            let temparr = [];
            for (var key in trans) {
                temparr.push(trans[key]);
            }
            resolve(temparr);
        }).catch((err) => {
            reject(err);
        })
    })
    return promise;
}

getExpenseCategory(){
  var promise = new Promise((resolve, reject) => {
    firebase.database().ref('users/' + this.userId + '/category-list')
    .once('value', (snapshot) => {
        let trans = snapshot.val();
        let temparr = [];
        for (var key in trans) {
          if(!trans[key].type)
            temparr.push(trans[key]);
        }
        resolve(temparr);
    }).catch((err) => {
        reject(err);
    })
})
return promise;
}

getIncomeCategory(){
  var promise = new Promise((resolve, reject) => {
    firebase.database().ref('users/' + this.userId + '/category-list')
    .once('value', (snapshot) => {
        let trans = snapshot.val();
        let temparr = [];
        for (var key in trans) {
          if(trans[key].type)
            temparr.push(trans[key]);
        }
        resolve(temparr);
    }).catch((err) => {
        reject(err);
    })
})
return promise;
}
}
