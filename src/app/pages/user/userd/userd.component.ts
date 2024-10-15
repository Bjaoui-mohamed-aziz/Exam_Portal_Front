import { Component } from '@angular/core';

@Component({
  selector: 'app-userd',
  templateUrl: './userd.component.html',
  styleUrls: ['./userd.component.css']
})
export class UserdComponent {
  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: { screenWidth: number; collapsed: boolean }): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  getBodyClass(): string {
    let styleClass = '';
  
    if (!this.isSideNavCollapsed && this.screenWidth < 768) {
      // Sidebar is expanded on small screens
      styleClass = 'body-expanded';
    } else if (!this.isSideNavCollapsed && this.screenWidth >= 768) {
      // Sidebar is expanded on large screens
      styleClass = 'body-expanded';
    } else if (this.isSideNavCollapsed && this.screenWidth < 768) {
      // Sidebar is collapsed on small screens
      styleClass = 'body-trimmed';
    } else if (this.isSideNavCollapsed && this.screenWidth >= 768) {
      // Sidebar is collapsed on large screens
      styleClass = 'body-md-screen';
    }
  
    return styleClass;
  }
}
