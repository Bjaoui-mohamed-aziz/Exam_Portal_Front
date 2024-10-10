import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-my-modal',
  template: `
    <h2 mat-dialog-title>Modal Title</h2>
    <mat-dialog-content>
      <p>This is the content of the modal.</p>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button (click)="close()">Close</button>
    </mat-dialog-actions>
  `
})
export class MyModalComponent {
  constructor(public dialogRef: MatDialogRef<MyModalComponent>) {}

  close(): void {
    this.dialogRef.close();  // This will close the modal
  }
} 

