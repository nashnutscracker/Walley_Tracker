import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SpentPage } from '../content/spent/spent';
import { Const } from '../../common/const';
import { DepositPage } from '../content/deposit/deposit';

@Component({
  selector: 'page-home',
  templateUrl: 'dashboard.html'
})
export class DashBoardPage {

  public wallet_money = Const.money;
  constructor(public navCtrl: NavController) {

  }

  spentpage() {
    this.navCtrl.push(SpentPage);
  }

  addtowalletpage() {
    this.navCtrl.push(DepositPage);
  }

}
