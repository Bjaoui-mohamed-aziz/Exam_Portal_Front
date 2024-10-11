import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyModalComponent } from '../../my-modal/my-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(MyModalComponent, {
      width: '500px',
      data: { name: 'Angular Modal' },

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }}
