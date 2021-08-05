import { Component, OnDestroy, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseFormComponent } from '../base-form-component';
import { finalize } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { BackEndClient } from '../back-end-client/back-end-client';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent extends BaseFormComponent implements OnInit, OnDestroy {

  @Input() backEnd!: BackEndClient
  @Output() registered = new EventEmitter()

  registerSubscription?: Subscription
  registrationInProgress = false
  errors: string[] = []

  constructor(formBuilder: FormBuilder) {
    super(formBuilder.group({
      userName: [''],
      password: [''],
      passwordR: [''],
    }))
  }

  ngOnDestroy(): void {
    this.registerSubscription?.unsubscribe()
  }

  ngOnInit(): void {
  }

  register() {
    this.errors = []
    this.validatePassword()

    if(this.form.valid) {
      this.registrationInProgress = true
      
      this.registerSubscription = this.backEnd.register({
        userName: this.form.controls.userName.value,
        password: this.form.controls.password.value,
      }).pipe(finalize(() => this.registrationInProgress = false))
      .subscribe(
          userData => this.registered.emit(userData),
          err => this.errors.push(err.error.message)
      )
    }
  }

  validatePassword() {
    if(this.form.controls.password.value !== this.form.controls.passwordR.value) {      
      this.form.controls.passwordR.setErrors(
        {custom: {errorText: "Password doesn't match"}}
      )
    }
  }

}
