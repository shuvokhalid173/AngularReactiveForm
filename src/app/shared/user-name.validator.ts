import { AbstractControl, ValidatorFn } from '@angular/forms';
import {AppComponent} from '../app.component';

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

  export function confirmPasswordValidator (control : AbstractControl) {
    const password = control.get('password'); 
    const confirmPassword = control.get('confirmPassword'); 
    if (password && confirmPassword && password.value != confirmPassword.value) {
      return {'matchPass' : true};
    }
    return null;
  }