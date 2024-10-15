import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { navbarData } from './nav-data-user';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidebaruser',
  templateUrl: './sidebaruser.component.html',
  styleUrls: ['./sidebaruser.component.css']
})
export class SidebaruserComponent implements OnInit{

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth: number = 0;
  categories;
  navData = navbarData;

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({
      screenWidth: this.screenWidth,
      collapsed: this.collapsed,
    });
  }
  constructor(
    private _cat:CategoryService,
    private _snack:MatSnackBar
  ){

    
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({
      screenWidth: this.screenWidth,
      collapsed: this.collapsed,
    });
  }
  ngOnInit(): void {

    
    this._cat.categories().subscribe(
      (data:any)=>{

        this.categories=data;
      },
      (error)=>{
        this._snack.open('Error in loading categories from server', '',{duration:3000})
      }
    )


  }

}
