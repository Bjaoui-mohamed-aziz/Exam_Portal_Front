import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private currentUser: any; // Store the current user object



  constructor(private http: HttpClient ) { }



  public addUser(user:any)
  {
   return this.http.post(`${baseUrl}/user/`, user);
  }


}
