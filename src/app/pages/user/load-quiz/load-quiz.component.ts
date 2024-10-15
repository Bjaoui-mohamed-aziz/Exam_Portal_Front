import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import baseUrl from 'src/app/services/helper';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {

  catId;
  quizzes;
  questionCounts: { [key: string]: number } = {};


constructor(
    private _route:ActivatedRoute,
    private _quiz:QuizService,
    private _http:HttpClient
){}
getQuestionCount(qid: string): Observable<number> {
  return new Observable<number>(observer => {
    this._http.get<any>(`${baseUrl}/question/quiz/all/${qid}`).subscribe(
      (response) => {
        const questionCount = response.length;
        observer.next(questionCount);
        observer.complete();
      },
      (error) => {
        observer.error(error);
      }
    );
  });
}
ngOnInit(): void {
  this.catId =  this._route.snapshot.params['catId'];
  this._route.params.subscribe((params)=>
  {
    this.catId= params['catId'];
   
  
  if(this.catId == 0){
    console.log("Load all the quiz");
  
    this._quiz.getActiveQuizzes().subscribe(
      (data:any)=>
    {
      this.quizzes=data;
      console.log(this.quizzes);
    },
    (error)=>{
      console.log(error);
      alert('Error in loading all quizzes');
    }
    );
  
  } else {
    console.log('Load specific quiz');
    this._quiz.getActiveQuizzesOfCategory(this.catId).subscribe(
      (data:any)=>{
        this.quizzes=data;
        console.log(this.quizzes)
      },
      (error)=> {
        alert('error in loading quiz data')
      }
    )
  }
  },)
  
  this._quiz.quizzes().subscribe(
    (data: any) => {
      this.quizzes = data;
      console.log(this.quizzes);

      this.quizzes.forEach(quiz => {
        this.getQuestionCount(quiz.qID).subscribe(count => {
          this.questionCounts[quiz.qID] = count;
        });
      });
    }
  );
}}