import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../global-services/customer/customer.service';
import { Customer } from '../../models/customer.model';
import { AlertService } from '../../global-services/alert/alert.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent implements OnInit {

  newCustomerForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private customerService: CustomerService) { }

  ngOnInit() {

    //let customer: Customer = new Customer();
    
    this.newCustomerForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      date_of_birth: ['', Validators.required],

    });
  }

  // convenience getter for easy access to form fields
  public get f() { return this.newCustomerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.newCustomerForm.invalid) {
      return;
    }

    this.loading = true;
    let newCustomer = new Customer();
    newCustomer.first_name = this.f.first_name.value;
    newCustomer.last_name = this.f.last_name.value;
    newCustomer.date_of_birth = this.f.date_of_birth.value;
    newCustomer.email = this.f.email.value;
    newCustomer.custCode = this.f.first_name.value.toLowerCase() + this.f.last_name.value.toLowerCase() + (new Date(this.f.date_of_birth.value)).toISOString().slice(0,10).replace(/-/g,"");

    this.customerService.create(newCustomer).subscribe(
      (data)=>{
        this.alertService.success("create new customers")
      },
      (error)=>{
        this.alertService.error(error.message);
      })
    // this.authenticationService.login(this.f.email.value, this.f.password.value)
    //   .pipe(first())
    //   .subscribe(
    //     data => {
    //       this.router.navigate([this.returnUrl]);
    //     },
    //     error => {
    //       this.alertService.error(error);
    //       this.loading = false;
    //     });
    
  }
}

