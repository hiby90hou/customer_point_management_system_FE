import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../global-services/customer/customer.service';
import { Customer } from '../../models/customer.model';
import { AlertService } from '../../global-services/alert/alert.service';

@Component({
  selector: 'app-oldest-customers-list',
  templateUrl: './oldest-customers-list.component.html',
  styleUrls: ['./oldest-customers-list.component.scss']
})
export class OldestCustomersListComponent implements OnInit {
  
  public customers: Array<Customer>;
  public loading: boolean = false;

  constructor(
    private customerService: CustomerService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.getCustomersList();
  }

  getCustomersList() {
    this.loading = true;
    this.customerService.getOldestCustomersList().subscribe(
      (data) => {
        this.customers = data;
        this.loading = false;
      },
      (error) => {
        this.alertService.error(error.message);
        this.loading = false;
      }
    )
  }

}
