import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';
import { LoginService } from 'src/app/services/login.service';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth: number = 0;
  navData = navbarData;

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({
      screenWidth: this.screenWidth,
      collapsed: this.collapsed,
    });
  }

  isLoggedIn = false;
  user = this.login.getUser();

  // Handle toggle collapse
  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({
      screenWidth: this.screenWidth,
      collapsed: this.collapsed,
    });
  }

  constructor(public login: LoginService) {}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.onToggleSideNav.emit({
      screenWidth: this.screenWidth,
      collapsed: this.collapsed,
    });
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe((data) => {
      this.isLoggedIn = this.login.isLoggedIn();
      this.user = this.login.getUser();
    });
  }

  public logout() {
    this.login.logout();
    window.location.reload();
    this.login.loginStatusSubject.next(false);
  }
}
