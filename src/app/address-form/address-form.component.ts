import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {

  formAddress: FormGroup

  constructor(private router: Router) { 
    this.formAddress = new FormGroup({
      calle: new FormControl('', [Validators.required]),
      numero: new FormControl('', [Validators.required, Validators.pattern(/[0-1]{1}[0-9]{0,2}/)]),
      codigoPostal: new FormControl('', [Validators.required, Validators.pattern(/[0-9]{5}/)]),
      ciudad: new FormControl('', [Validators.required])
    })
  }

  ngOnInit() {
  }

  handleClickAnterior() {
    this.router.navigate(['/personal'])
  }

  handleClickSiguiente() {
    this.router.navigate(['/account'])    
  }

}
