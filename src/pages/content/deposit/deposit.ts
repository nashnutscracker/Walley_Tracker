import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashBoardPage } from '../../dashboard/dashboard';
import { Const } from '../.././../common/const';

/**
 * Generated class for the DepositPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deposit',
  templateUrl: 'deposit.html',
})
export class DepositPage {
  dataToStore: { date: string; mode: string; reason: string; amount: string; };
  public wallet_money = Const.money;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dataToStore = {
      date: '',
      mode: 'deposit',
      reason: '',
      amount: ''

    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DepositPage');
  }
  addtowallet(date, reason, amount) {
    this.dataToStore.date = date;
    this.dataToStore.amount = amount;
    this.dataToStore.reason = reason;

    console.log(this.dataToStore);
  }

}
