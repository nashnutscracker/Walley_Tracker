import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { Const } from "../../../common/const";
// import { DashBoardPage } from '../../dashboard/dashboard';
import { Storage } from '@ionic/storage';
import { LocalStorageProvider } from '../../../providers/local-storage/local-storage';

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
  providers: [LocalStorageProvider]
})
export class SpentPage {
  finalData;
  // public wallet_money = Const.money;
  dataToStore;
  public now = new Date().toISOString();
  datafromstore;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public localStorage: LocalStorageProvider) {
    console.log(this.now);
    this.dataToStore = {
      date: '',
      reason: '',
      money: ''

    }

  }

  spend(date, reason, money) {
    this.dataToStore.date = date;
    this.dataToStore.reason = reason;
    this.dataToStore.money = money;
    this.datafromstore = this.localStorage.getWalleyMoneyData();
    console.log(this.datafromstore);


    if (this.datafromstore == null) {
      console.log("NULL and now setting");
      this.localStorage.setWalleyMoneyData(this.dataToStore);

    }
    else {
      console.log("!NULL")

      this.dataToStore = this.localStorage.getWalleyMoneyData();
      this.datafromstore.push(this.dataToStore);
      //append data here to datafromStore
    }


  }
}