import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.css']
})
export class SignupModalComponent {
  @Output() toggle = new EventEmitter<void>(); // Event emitter

  // Call this method when user clicks "Login here"
  onLoginClick() {
    this.toggle.emit();
  }

constructor(private userService:UserService,private _snack:MatSnackBar,public dialogRef: MatDialogRef<SignupModalComponent>,
  private toastr: ToastrService
){

  
  dialogRef.updateSize('800px', '600px'); 

}
close(): void {
  this.dialogRef.close();
}
public user={

 username: '',
 password: '',
 firstName:'',
 lastName:'',
 email: '',
 phone:'',

};

ngOnInit(): void {}

formSubmit() {

  console.log(this.user);
  if(this.user.username=='' || this.user.username == null){
    //alert('User is required !!')
    this._snack.open("Username is required !!",'',{
      duration:3000,
      verticalPosition:'top',
      horizontalPosition:'left'
    })
    return;
  }



  this.userService.addUser(this.user).subscribe(
    {
      next: (data) => 
        this.toastr.success('Quiz added successfully!', 'Success'),
      error: (err) =>  this._snack.open("Something went wrong !!",'',{
      duration:3000,
      verticalPosition:'top',
      horizontalPosition:'left'
    }),
      complete: () => console.log("completed")
    });
    this.dialogRef.close();

}


}