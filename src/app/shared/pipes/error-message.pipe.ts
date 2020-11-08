import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'errorMessage'
})
export class ErrorMessagePipe implements PipeTransform {
  constructor() {
  }

  transform(errors: any): string {
    if (!errors) {
      return '';
    }

    if (errors.required) {
      return 'Field is required';
    }

    if (errors.minlength) {
      return `Min ${errors.minlength.requiredLength} characters`;
    }

    if (errors.maxlength) {
      return `Max ${errors.maxlength.requiredLength} characters`;
    }

    return '';
  }
}
