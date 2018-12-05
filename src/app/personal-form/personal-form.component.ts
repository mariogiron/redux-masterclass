import { CHANGE_FORM_PERCENT, UPDATE_PERSONAL_INFO } from './../actions';
import { NgRedux } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IAppState } from '../store';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.css']
})
export class PersonalFormComponent implements OnInit {

  formPersonal: FormGroup

  constructor(private router: Router, private ngRedux: NgRedux<IAppState>) {

  }

  ngOnInit() {
    let personalInfo = this.ngRedux.getState().personalInfo
    this.formPersonal = new FormGroup({
      nombre: new FormControl(personalInfo.nombre || '', [Validators.required]),
      apellidos: new FormControl(personalInfo.apellidos || '', [Validators.required]),
      edad: new FormControl(personalInfo.edad || '', [Validators.required, Validators.pattern(/[0-9]{0,2}/)]),
      email: new FormControl(personalInfo.email || '', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)])
    })    
    if (Object.keys(personalInfo).length !== 0 && personalInfo.constructor === Object) {
      for (var i in this.formPersonal.controls) {
        this.formPersonal.controls[i].markAsTouched();
      }
    }
  }

  handleClickSiguiente() {
    this.ngRedux.dispatch({
      type: UPDATE_PERSONAL_INFO,
      data: { personalInfo: this.formPersonal.value }
    })
    this.ngRedux.dispatch({
      type: CHANGE_FORM_PERCENT,
      data: { percentCompleted: 25 }
    })
    this.router.navigate(['/address'])
  }

}
