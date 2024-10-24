import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { startWith, debounceTime, switchMap } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { ResultService } from 'src/app/services/result.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{

  searchControl = new FormControl();
  filteredUsers!: Observable<any[]>;

  results = [];


  constructor(private _http: HttpClient, private _results : ResultService,private userService: UserService
  ) {}1


  ngOnInit(): void {


    
    this._results.GetResult().subscribe(
      (data: any) => {
        this.results = data;
        console.log(this.results);
      },
      (error) => {
        console.log(error);
      }
    );

    this.filteredUsers = this.searchControl.valueChanges.pipe(
      startWith(''),
      debounceTime(300), // Delay API calls to avoid flooding the server
      switchMap(value => this.userService.searchUsersByUsername(value))
    );
    
  }


  displayUser(user: any): string {
    return user ? user.username : '';
  }

  deleteResult(id, index: number) {
    Swal.fire({
      icon: 'info',
      title: 'Are you sure?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this._results.deleteResult(id).subscribe(
          (data) => {
            this.results = this.results.filter((result) => result.resultId != id);
            Swal.fire('Success', 'Quiz deleted', 'success');
            this.results.splice(this.results.indexOf(id), 1);
          },
          (error) => {
            Swal.fire('Error', 'Error in deleting quiz', 'error');
          }
        );
      }
    });
  }

}
