import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class LocalStorageProvider {

  constructor(private storage: Storage) {

  }

  getWalleyTrackerFlag() {
    return this.storage.get('WTFlag');

  }
}
