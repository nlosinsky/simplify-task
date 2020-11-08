import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormFieldGroup } from '../../models';

@Injectable({providedIn: 'root'})
export class DynamicFormService {
  constructor(
    private fb: FormBuilder
  ) {
  }

  getFormConfig(groups: FormFieldGroup[]) {
    const config = {};
    groups.forEach(group => {
      group.fields.forEach(field => {
        const validators = [];

        if (field.is_required) {
          validators.push(Validators.required);
        }

        if (field.meta_data) {
          const {min_length, max_length} = field.meta_data;

          if (min_length) {
            validators.push(Validators.minLength(min_length));
          }

          if (max_length) {
            validators.push(Validators.maxLength(max_length));
          }
        }

        config[field.slug] = this.fb.control('', validators);
      });
    });

    return config;
  }
}
