import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
export interface Questions {
  quiz: {
    qID: number; // Adjust based on your actual quiz ID field
  };
  content: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  answer: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuestionService {


  constructor(
    private _http:HttpClient,
  ) { }

  public getQuestionsOfQuiz(qid)
  {
    return this._http.get(`${baseUrl}/question/quiz/all/${qid}`)
  }

  public getQuestion(quesId: number) {
    return this._http.get<Questions>(`${baseUrl}/question/${quesId}`);
  }
  


  public getQuestionsOfQuizForTest(qid)
  {
    return this._http.get(`${baseUrl}/question/quiz/all/${qid}`)
  }


  public addQuestion(question)
  {
    return this._http.post(`${baseUrl}/question/`,question)
  }

  public updateQuestion(questionId, question) {
    return this._http.put(`${baseUrl}/question/${questionId}`, question);
  }
  
  public deleteQuestion(questionId)
  {
    return this._http.delete(`${baseUrl}/question/${questionId}`)
  }

  //eval quiz

  evalQuiz(requestBody: any[], userId: number) {
    const url = `http://localhost:8080/question/eval-quiz?userId=${userId}`;
    return this._http.post(url, requestBody);
  }

  public getResponseOfUser(resultId: number) {
    const url = `http://localhost:8080/question/result/${resultId}`;
    return this._http.get(url);
  }
}
