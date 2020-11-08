import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { PipesModule } from '../../pipes/pipes.module';
import { DynamicFormComponent } from './dynamic-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PipesModule,
    NgbDatepickerModule,
    FontAwesomeModule
  ],
  exports: [
    DynamicFormComponent
  ],
  declarations: [
    DynamicFormComponent
  ],
  providers: [],
})
export class DynamicFormModule {
}
