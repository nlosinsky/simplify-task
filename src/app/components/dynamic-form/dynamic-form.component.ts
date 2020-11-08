import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FieldEnum, FormField, FormTabConfig, SourceEnum } from '../../models';
import { FormHelperService } from '../../services/form-helper.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: 'dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicFormComponent implements OnInit, OnChanges {
  @Input() config: FormTabConfig;
  @Input() data;
  @Output() formData = new EventEmitter();

  form: FormGroup;
  fieldTypes: typeof FieldEnum = FieldEnum;
  sourceTypes: typeof SourceEnum = SourceEnum;

  constructor(
    private fb: FormBuilder,
    private formHelperService: FormHelperService
  ) {
  }

  ngOnInit() {
  }

  ngOnChanges({config, data}: SimpleChanges): void {
    if (config && config.currentValue) {
      this.initForm();
    }

    if (data && data.currentValue) {
      this.setFormData();
    }
  }

  trackByGroup(index: number) {
    return index;
  }

  trackByField(index: number, item: FormField) {
    return item.id;
  }

  onSubmit() {
    if (!this.isFormValid) {
      this.formHelperService.setAllControlsDirty(this.form.controls);
      return;
    }
    this.formData.emit(this.form.value);
  }

  isInvalidField(fieldName: string): boolean {
    const field = this.form.get(fieldName);
    return this.formHelperService.isInvalidField(field);
  }

  get isFormValid(): boolean {
    return this.form.valid;
  }

  private initForm() {
    const config = {};
    this.config.field_groups.forEach(group => {
      group.fields.forEach(field => {
        config[field.slug] = this.fb.control('', field.is_required ? Validators.required : null);
      });
    });
    this.form = this.fb.group(config);
  }

  private setFormData() {
    const obj = {};
    Object.keys(this.form.controls).forEach(key => {
      if (this.data[key]) {
        obj[key] = this.data[key];
      }
    });

    this.form.patchValue(obj);
  }
}
