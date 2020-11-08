import { Injectable } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';

@Injectable({providedIn: 'root'})
export class StorageService {
  constructor(
    private storage: StorageMap
  ) {
  }

  saveFormData(data) {
    return this.storage.set('form_data', data);
  }

  getFormData() {
    return this.storage.get('form_data');
  }
}
