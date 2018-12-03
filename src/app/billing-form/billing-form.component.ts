import { UtilService } from './../util.service';
import { NgRedux } from '@angular-redux/store';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAppState } from '../store';

@Component({
  selector: 'app-billing-form',
  templateUrl: './billing-form.component.html',
  styleUrls: ['./billing-form.component.css']
})
export class BillingFormComponent implements OnInit {

  formBilling: FormGroup

  constructor(private router: Router, private ngRedux: NgRedux<IAppState>, private util: UtilService) { 
    let billingInfo = this.ngRedux.getState().billingInfo
    this.formBilling = new FormGroup({
      creditCardNumber: new FormControl(billingInfo.creditCardNumber || '', [Validators.required]),
      fechaCaducidad: new FormControl(billingInfo.fechaCaducidad || '', [Validators.required]),
      numControl: new FormControl(billingInfo.numControl || '', [Validators.required, Validators.pattern(/[0-9]{3}/)])
    })
    this.util.markAsTouched(billingInfo, this.formBilling)
  }

  ngOnInit() {
  }

  handleClickAnterior() {
    this.router.navigate(['/account'])
  }

  handleClickEnviar() {
    console.log('Enviar los datos')
  }

}