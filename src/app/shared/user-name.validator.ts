import { AbstractControl, ValidatorFn } from '@angular/forms';

export function forbiddenNameValidator(control : AbstractControl){
    if (control.value == 'admin') {
      return {'forbiddenName' : true};
    }
    return null;
  }

  export function passValidator (control : AbstractControl) {
    if (control.value.length < 5) {
      return {'invalidPass' : true};
    }
    return null;
  }

  export function passFieldEmpty (control : AbstractControl) {
    if (!control.value) {
      return {'pe' : true};
    }
    return null;
  }