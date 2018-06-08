import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class LocalStorageProvider {

  constructor(private storage: Storage) {
    // this.storage.remove('WTFlag');
    // this.storage.remove('WTPin');
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
}
