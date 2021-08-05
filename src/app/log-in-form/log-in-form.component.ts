import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { BackEndClient } from '../back-end-client/back-end-client';
import { UserCredentials } from '../back-end-client/request-data';
import { BaseFormComponent } from '../base-form-component';

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.css']
})
export class LogInFormComponent extends BaseFormComponent implements OnInit, OnDestroy {

  @Input() backEnd!: BackEndClient
  @Output() loggedIn = new EventEmitter()

  logInSubscription?: Subscription
  logInInProgress = false
  errors: string[] = []

  constructor(formBuilder: FormBuilder) {
    super(formBuilder.group({
      userName: [''],
      password: ['']
    }))
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.logInSubscription?.unsubscribe()
  }

  login() {

    if(this.form.valid) {
      this.logInInProgress = true
      this.errors = []
      
      let credentials: UserCredentials = {
        userName: this.form.controls.userName.value,
        password: this.form.controls.password.value
      }

      this.logInSubscription = this.backEnd.login(credentials)
        .pipe(finalize(() => this.logInInProgress = false))
        .subscribe(
            session => this.loggedIn.emit({ sessionData: session, credentials: credentials }),
            err => this.errors.push(err.error.message)
        )
    }
  }

}
