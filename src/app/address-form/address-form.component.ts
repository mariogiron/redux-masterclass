import { CHANGE_FORM_PERCENT, UPDATE_ADDRESS_INFO } from './../actions';
import { NgRedux } from '@angular-redux/store';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAppState } from '../store';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {

  formAddress: FormGroup

  constructor(private router: Router, private ngRedux: NgRedux<IAppState>) { 
    let addressInfo = this.ngRedux.getState().addressInfo
    this.formAddress = new FormGroup({
      calle: new FormControl(addressInfo.calle || '', [Validators.required]),
      numero: new FormControl(addressInfo.numero || '', [Validators.required, Validators.pattern(/[0-1]{1}[0-9]{0,2}/)]),
      codigoPostal: new FormControl(addressInfo.codigoPostal || '', [Validators.required, Validators.pattern(/[0-9]{5}/)]),
      ciudad: new FormControl(addressInfo.ciudad || '', [Validators.required])
    })
    if (Object.keys(addressInfo).length !== 0 && addressInfo.constructor === Object) {
      for (var i in this.formAddress.controls) {
        this.formAddress.controls[i].markAsTouched();
      }
    }
  }

  ngOnInit() {
  }

  handleClickAnterior() {
    this.router.navigate(['/personal'])
  }

  handleClickSiguiente() {
    this.ngRedux.dispatch({
      type: UPDATE_ADDRESS_INFO,
      data: { addressInfo: this.formAddress.value }
    })
    this.ngRedux.dispatch({
      type: CHANGE_FORM_PERCENT,
      data: { percentCompleted: 50 }
    })
    this.router.navigate(['/account'])    
  }

}
