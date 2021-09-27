import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  //we cant acces the private member on view so we made it public.
  //isLoggedin : boolean = false
  constructor(public authentication : HardcodedAuthenticationService) { }

  ngOnInit(): void {
      //this.isLoggedin = this.authentication.isUserLoggedin()
  }

}
