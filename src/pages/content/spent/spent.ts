import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Const } from "../../../common/const";
import { DashBoardPage } from '../../dashboard/dashboard';

/**
 * Generated class for the SpentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-spent',
  templateUrl: 'spent.html',
})
export class SpentPage {
  public wallet_money = Const.money;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  spend(date, reason, money) {
    this.wallet_money = this.wallet_money - money;
    this.navCtrl.push(DashBoardPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpentPage');
  }

}
