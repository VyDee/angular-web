import { AuthService } from 'src/app/user/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `
})
export class EventsAppComponent {
  constructor(private auth:AuthService){}

  ngOnInit() {
    this.auth.checkAuthenticationStatus();
  }
}
