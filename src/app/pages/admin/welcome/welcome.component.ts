import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResultService } from 'src/app/services/result.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{

  results = [];


  constructor(private _http: HttpClient, private _results : ResultService,
  ) {}


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
