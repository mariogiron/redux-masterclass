import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  markAsTouched(objectToTouched, form) {
    if (Object.keys(objectToTouched).length !== 0 && objectToTouched.constructor === Object) {
      for (var i in form.controls) {
        form.controls[i].markAsTouched();
      }
    }
  }
}
