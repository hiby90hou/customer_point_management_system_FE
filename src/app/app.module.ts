import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login-main/login.component';
import { AlertComponent } from './global-services/alert/alert/alert.component';
import { SignUpComponent } from './sign-up/sign-up-main/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard-main/dashboard.component';

import { AuthGuard } from './global-services/auth/authguard.service';
import { OldestCustomersListComponent } from './dashboard/oldest-customers-list/oldest-customers-list.component';
import { NewCustomerComponent } from './dashboard/new-customer/new-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertComponent,
    SignUpComponent,
    DashboardComponent,
    OldestCustomersListComponent,
    NewCustomerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
