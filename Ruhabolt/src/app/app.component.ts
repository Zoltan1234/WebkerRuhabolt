import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'webshop'
  loggedInUser?: firebase.default.User | null

  ngOnInit(): void {
  }

  constructor(private router: Router, private authService: AuthService) {
  }

  ngAfterViewInit(): void {
    this.authService.isUserLoggedIn().subscribe(user => {
      this.loggedInUser = user
      localStorage.setItem("user", JSON.stringify(user))
    }, error => {
      console.error(error)
      localStorage.setItem("user", JSON.stringify("null"))
    })
  }

  logout() {
    this.authService.logout()
    this.loggedInUser = null
  }

  onToggleSidenav(sidenav: MatSidenav) {
    sidenav.toggle()
  }

  onClose(event: any, sidenav: MatSidenav) {
    if (event == true) {
      sidenav.close()
    }
  }

  onClickLogout() {
    this.logout();
  }
}

