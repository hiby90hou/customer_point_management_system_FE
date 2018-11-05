import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService } from '../../global-services/alert/alert.service';
import { UserService } from '../../global-services/user/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  // convenience getter for easy access to form fields
  public get f() { return this.registerForm.controls; }
  
  check(){
    console.log(this.f)
  }
  onSubmit() {
    console.log("submit")
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      console.log("invalid")
      return;
    }
  
    this.loading = true;
    this.userService.register(this.registerForm.value)
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          console.log(error);
          this.alertService.error(error.message);
          this.loading = false;
        });
  }
}