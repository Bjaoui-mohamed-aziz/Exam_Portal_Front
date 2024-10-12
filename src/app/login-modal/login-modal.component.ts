import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-my-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class MyModalComponent {
  constructor(public dialogRef: MatDialogRef<MyModalComponent>) {
    dialogRef.updateSize('400px', '500px'); 
    

  }

  close(): void {
    this.dialogRef.close();
  }
}