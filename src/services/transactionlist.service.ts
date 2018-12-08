import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class TransactionlistService {

userId: string;

constructor() {
    this.userId = firebase.auth().currentUser.uid;
}

getTransactionList() {
    var promise = new Promise((resolve, reject) => {
        firebase.database().ref('users/' + this.userId + '/transaction-list')
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

getExpenseList(){
  var promise = new Promise((resolve, reject) => {
    firebase.database().ref('users/' + this.userId + '/transaction-list')
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

getIncomeList(){
  var promise = new Promise((resolve, reject) => {
    firebase.database().ref('users/' + this.userId + '/transaction-list')
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

calculateExpense(){
  var promise = new Promise((resolve, reject) => {
    var expense = 0;
    firebase.database().ref('users/' + this.userId + '/transaction-list')
    .once('value').then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var type = childSnapshot.child("type").val();
        var amount = childSnapshot.child("amount").val();
        if(!type){
          expense -= amount;
        }
      });
        resolve(expense);
    }).catch((err) => {
        reject(err);
    })
  })
  return promise;
}

calculateIncome(){
  var promise = new Promise((resolve, reject) => {
    var income = 0;
    firebase.database().ref('users/' + this.userId + '/transaction-list')
    .once('value').then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var type = childSnapshot.child("type").val();
        var amount = childSnapshot.child("amount").val();
        if(type){
          income += amount;
        }
      });
        resolve(income);
    }).catch((err) => {
        reject(err);
    })
  })
  return promise;
}

calculateBalance(){
  var promise = new Promise((resolve, reject) => {
    var balance = 0;
    firebase.database().ref('users/' + this.userId + '/transaction-list')
    .once('value').then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var type = childSnapshot.child("type").val();
        var amount = childSnapshot.child("amount").val();
        if(type){
          balance += amount;
        }else{
          balance -= amount;
        }
      });
        resolve(balance);
    }).catch((err) => {
        reject(err);
    })
  })
  return promise;
}
}
