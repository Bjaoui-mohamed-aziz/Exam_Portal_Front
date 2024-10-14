import { Component, EventEmitter, Output } from '@angular/core';
import { navbarData } from './nav-data';


interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;

}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


  @Output() onToggleSideNav:EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = true;
  screenWidth: 0;
  navData = navbarData;

  toggleCollapse(): void {
    this.collapsed= !this.collapsed;
    }

  closeSidenav(): void {
  this.collapsed = false;
  this.onToggleSideNav.emit({screenWidth: this.screenWidth, collapsed: this.collapsed});

}
}