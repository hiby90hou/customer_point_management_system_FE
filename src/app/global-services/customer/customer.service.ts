import { Injectable } from '@angular/core';
import { Customer } from '../../models/customer.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient) { }

  getOldestCustomersList(): Observable<any> {
    const token = localStorage.getItem("access_token")
    let options = {
      headers: new HttpHeaders().set('Authorization', token)
    };
    return this.http.get(`${environment.apiUrl}/customers/show_five_customers`, options);
  }

  showIndex(): Observable<any> {
    const token = localStorage.getItem("access_token")
    let options = {
      headers: new HttpHeaders().set('Authorization', token)
    };
    return this.http.get(`${environment.apiUrl}/customers`, options);
  }
  create(customer: Customer) {
    const token = localStorage.getItem("access_token")
    const userId = JSON.parse(localStorage.getItem("currentUser")).id;
    let options = {
      headers: new HttpHeaders().set('Authorization', token).set('content-type', 'application/json')
    };
    let body = {
      "customer":
      {
        "custCode": customer.custCode,
        "first_name": customer.first_name,
        "last_name": customer.last_name,
        "date_of_birth": customer.date_of_birth,
        "email": customer.email,
        "user_id": userId
      }
    };

    console.log(body);

    return this.http.post(`${environment.apiUrl}/customers`, body, options);

  }
}
