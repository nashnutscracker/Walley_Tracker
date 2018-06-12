import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class LocalStorageProvider {

  dataFromStore: any;
  constructor(private storage: Storage) {
    console.log("CAlled")
    // this.dataFromStore = this.getWalleyMoneyData();
  }

  getWalleyTrackerFlag() {
    return this.storage.get('WTFlag');

  }
  setWalleyTrackerPin(pin) {
    this.storage.set('WTPin', pin);
    this.storage.set('WTFlag', true);
  }
  getWalleyTrackerPin() {
    return this.storage.get('WTPin');

  }

  setWalleyMoneyData(data) {//store data in a single object or store money and reason in a date array, or store every data in csv format
    this.storage.get("data").then(res => {
      if (res == null) {
        this.storage.set('data', data);
      }
      else {

        console.log("This is !NULL RES" + res);

      }
    });
  }

  getWalleyMoneyData() {
    this.storage.get("data").then(res => {
      if (res == null) {
        console.log("NULL");
        // console.log(JSON.stringify(res));
        return JSON.stringify(res);


      }
      else {
        console.log("!NULL");
        // console.log(JSON.stringify(res));
        return JSON.stringify(res);
      }
    });
  }

  reset() {
    this.storage.remove('data').then(res => {
      console.log("DONE with object")
    });

    this.storage.remove('WTFlag').then(res => {
      console.log("DONE with Flag")
    });

  }
}
