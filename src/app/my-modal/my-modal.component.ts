import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.css']
})
export class MyModalComponent {
  constructor(public dialogRef: MatDialogRef<MyModalComponent>) {
    dialogRef.updateSize('400px', '520px'); 
    

  }

  close(): void {
    this.dialogRef.close();
  }
} 
