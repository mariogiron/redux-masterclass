import { CHANGE_ACCOUNT_TYPE } from './../actions';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';

@Component({
  selector: 'app-account-type-form',
  templateUrl: './account-type-form.component.html',
  styleUrls: ['./account-type-form.component.css']
})
export class AccountTypeFormComponent implements OnInit {

  accountSelected: number

  constructor(private router: Router, private ngRedux: NgRedux<IAppState>) { 
    this.accountSelected = this.ngRedux.getState().accountType
  }

  ngOnInit() {
  }

  handleClickAnterior() {
    this.router.navigate(['/address'])    
  }

  handleClickSiguiente() {
    this.router.navigate(['/billing'])
  }

  handleSelectAccount(accountNumber) {
    this.accountSelected = accountNumber
    this.ngRedux.dispatch({
      type: CHANGE_ACCOUNT_TYPE,
      data: { accountType: accountNumber }
    })
  }

}
