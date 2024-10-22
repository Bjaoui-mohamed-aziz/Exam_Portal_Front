import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResultService } from 'src/app/services/result.service';


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

}
