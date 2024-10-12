import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.css']
})
export class SignupModalComponent {

  constructor(public dialogRef: MatDialogRef<SignupModalComponent>) {
    dialogRef.updateSize('400px', '500px'); 
    

  }

  close(): void {
    this.dialogRef.close();
  }

}
