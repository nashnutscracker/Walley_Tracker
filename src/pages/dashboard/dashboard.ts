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
  items =
    {
      amountInWallet: 300,
      dateModified: "12-12-2018",
      transactions:
        [
          {
            sr: 1,
            date: "1 /1 / 2018",
            mode: "spent",
            reason: "shopping",
            amount: 50
          },
          {
            sr: 2,
            date: "2  /2 / 2018",
            mode: "deposit",
            reason: "ATM",
            amount: 500
          },
          {
            sr: 3,
            date: "3 / 3 / 2018",
            mode: "spent",
            reason: "Dinner",
            amount: 100
          },
          {
            sr: 4,
            date: "4 / 4 / 2018",
            mode: "spent",
            reason: "Liqour",
            amount: 550
          },
          {
            sr: 5,
            date: "5 / 5 / 2018",
            mode: "deposit",
            reason: "ATM",
            amount: 1000
          },
          {
            sr: 6,
            date: "6 / 6 / 2018",
            mode: "spent",
            reason: "Food",
            amount: 250
          }
        ]
    }
  constructor(public navCtrl: NavController) {
    console.log("HI this is dashboard")
    console.log(this.items);
  }

  spentpage() {
    this.navCtrl.push(SpentPage);
  }

  addtowalletpage() {
    this.navCtrl.push(DepositPage);
  }

}
