import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthModalComponent } from 'src/app/auth-modal/auth-modal.component'; // Adjust the path accordingly

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AuthModalComponent, {
      width: '500px',
      data: { name: 'Angular Modal' },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
