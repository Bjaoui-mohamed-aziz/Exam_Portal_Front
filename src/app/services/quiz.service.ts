import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _http:HttpClient ) { }

  public quizzes()
  {
    return this._http.get(`${baseUrl}/quiz/`)
  }

  public addQuiz(quiz){
    return this._http.post(`${baseUrl}/quiz/`, quiz)
  }

  public deleteQuiz(qID)
  {
    return this._http.delete(`${baseUrl}/quiz/${qID}`);
  }

  public getQuiz(qID){

    return this._http.get(`${baseUrl}/quiz/${qID}`)
  }

  public updateQuiz(quiz){
    return this._http.put(`${baseUrl}/quiz/`,quiz)
  }

  //get quizzes of category
  public getQuizzesOfCategory(cid){

    return this._http.get(`${baseUrl}/quiz/category/${cid}`);

  }

  public getActiveQuizzes(){
    return this._http.get(`${baseUrl}/quiz/active`);
  }

  public getActiveQuizzesOfCategory(cid)
  {
    return this._http.get(`${baseUrl}/quiz/category/active/${cid}`)
  }
}
