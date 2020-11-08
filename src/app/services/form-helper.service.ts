import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class FormHelperService {
  constructor() {}

  isInvalidField(field: AbstractControl): boolean {
    return field.invalid && (field.dirty || field.touched);
  }

  setAllControlsDirty(controls: { [key: string]: AbstractControl | FormGroup }): void {
    Object.keys(controls)
      .map(key => controls[key])
      .forEach((value: AbstractControl) => {
        if (value instanceof FormGroup) {
          this.setAllControlsDirty(value.controls);
        } else {
          value.markAsDirty({onlySelf: true});
        }
      });
  }
}
