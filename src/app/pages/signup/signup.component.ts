import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

constructor(private userService:UserService,private _snack:MatSnackBar){}

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
      next: (data) => Swal.
      fire('Success','user is registered','success'),
      error: (err) =>  this._snack.open("Something went wrong !!",'',{
      duration:3000,
      verticalPosition:'top',
      horizontalPosition:'left'
    }),
      complete: () => console.log("completed")
    });
}


}