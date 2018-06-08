import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs';
import { NavController, NavParams, AlertController } from 'ionic-angular';


@Component({
    templateUrl: 'login.html'
})

export class LoginPage {

    sucessLogin;
    alertCtrl;


    constructor(public navCtrl: NavController, public navPrams: NavParams,
        public alerCtrl: AlertController) {
        this.sucessLogin = TabsPage

    }



    validate(pin) {

        if (pin == 1234) {

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


