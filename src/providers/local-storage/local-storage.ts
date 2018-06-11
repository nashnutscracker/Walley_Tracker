import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class LocalStorageProvider {

  constructor(private storage: Storage) {
    // this.storage.remove('WTFlag');
    // this.storage.remove('WTPin');
    // this.storage.remove('data');
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

  setWalleyMoneyData(data) {
    this.storage.set("data", data);
  }

  getWalleyMoneyData() {
    this.storage.get("data").then(res => {
      if (res == null) {
        return res;
      }
      else {
        return res;
      }
    });
  }
}
