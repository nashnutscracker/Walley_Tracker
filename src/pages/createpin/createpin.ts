import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { LocalStorageProvider } from "../../providers/local-storage/local-storage";
import { DashBoardPage } from '../dashboard/dashboard';
import { LoginPage } from '../login/login';

/**
 * Generated class for the CreatepinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-createpin',
  templateUrl: 'createpin.html',
})
export class CreatepinPage {

  constructor(private localStorage: LocalStorageProvider, private navCtrl: NavController) {
  }

  create(pin, confirmpin) {
    if (pin == confirmpin) {
      this.localStorage.setWalleyTrackerPin(pin);

      this.navCtrl.push(LoginPage);
    }
    else {
      console.log("bye");
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatepinPage');
  }

}
