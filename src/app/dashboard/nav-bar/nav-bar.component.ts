import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../global-services/auth/authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
  }
  signOut(){
    this.authService.logout();
  }
}
