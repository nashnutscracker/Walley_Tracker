import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocalStorageProvider } from "../providers/local-storage/local-storage";

import { LoginPage } from '../pages/login/login';
import { DashBoardPage } from '../pages/dashboard/dashboard';
import { Storage } from '@ionic/storage';
import { CreatepinPage } from '../pages/createpin/createpin';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar,
    splashScreen: SplashScreen,
    private localStorage: LocalStorageProvider, public storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

    });
    this.checkPIN();
  }

  checkPIN() {


    this.localStorage.getWalleyTrackerFlag()
      .then(res => {

        if (res == null) {
          this.nav.push(CreatepinPage);
        }
        else
          this.nav.push(DashBoardPage);
      })
  }
}
