import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';


@Component({
    templateUrl: 'login.html'
})

export class LoginPage {

    sucessLogin;
    alertCtrl;
    WTPin;


    constructor(public navCtrl: NavController, public navPrams: NavParams,
        public alerCtrl: AlertController, public localStorage: LocalStorageProvider) {
        this.sucessLogin = TabsPage
        localStorage.getWalleyTrackerPin().then(res => {
            this.WTPin = res;
        })

    }



    validate(pin) {
        if (pin == this.WTPin) {

            this.navCtrl.push(TabsPage);
        }
        else
            this.doAlert();
    }

    doAlert() {
        let alert = this.alerCtrl.create({
            title: 'Login',
            message: 'Wrong Credentials!',
            buttons: ['Ok']
        });
        alert.present()
    }




}


