import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalFormComponent } from './personal-form/personal-form.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { AccountTypeFormComponent } from './account-type-form/account-type-form.component';
import { BillingFormComponent } from './billing-form/billing-form.component';
import { Error404Component } from './error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalFormComponent,
    AddressFormComponent,
    AccountTypeFormComponent,
    BillingFormComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
