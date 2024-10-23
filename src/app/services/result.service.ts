import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ResultService {



  constructor(private _http : HttpClient) { }


  public GetResult()
  {
    return this._http.get(`http://localhost:8080/question/results`)
  }

  public deleteResult(id) {
    return this._http.delete(`${baseUrl}/question/result/${id}`);
  }

}
