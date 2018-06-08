import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, NavController } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { DashBoardPage } from '../pages/dashboard/dashboard';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { SpentPage } from '../pages/content/spent/spent';
import { DepositPage } from '../pages/content/deposit/deposit';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { LocalStorageProvider } from '../providers/local-storage/local-storage';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    DashBoardPage,
    TabsPage,
    LoginPage,
    SpentPage,
    DepositPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    DashBoardPage,
    TabsPage,
    LoginPage,
    SpentPage,
    DepositPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    LocalStorageProvider
  ]
})
export class AppModule { }
