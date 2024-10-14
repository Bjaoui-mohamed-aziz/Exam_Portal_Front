import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
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
