import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.css']
})
export class PersonalFormComponent implements OnInit {

  formPersonal: FormGroup

  constructor(private router: Router) {
    this.formPersonal = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      edad: new FormControl('', [Validators.required, Validators.pattern(/[0-1]{1}[0-9]{0,2}/)]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)])
    })
  }

  ngOnInit() {
  }

  handleClickSiguiente() {
    this.router.navigate(['/address'])
  }

}
