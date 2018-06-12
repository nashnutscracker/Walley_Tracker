import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';
import { CreatepinPage } from '../createpin/createpin';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [LocalStorageProvider]
})
export class AboutPage {


  constructor(public navCtrl: NavController, private localStorage: LocalStorageProvider) {

  }

  logout() {
    this.localStorage.reset();
    this.navCtrl.push(LoginPage);

  }

}
