import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import baseUrl from 'src/app/services/helper';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {

  quizzes = [];
  questionCounts: { [key: string]: number } = {};

  constructor(private _quiz: QuizService, private _http: HttpClient) {}

  ngOnInit(): void {
    this._quiz.quizzes().subscribe(
      (data: any) => {
        this.quizzes = data;
        console.log(this.quizzes);

        this.quizzes.forEach(quiz => {
          this.getQuestionCount(quiz.qID).subscribe(count => {
            this.questionCounts[quiz.qID] = count;
          });
        });
      },
      (error) => {
        console.log(error);
        Swal.fire('Error!', 'Error in loading data!', 'error');
      }
    );
  }

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

  deleteQuiz(qID) {
    Swal.fire({
      icon: 'info',
      title: 'Are you sure?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this._quiz.deleteQuiz(qID).subscribe(
          (data) => {
            this.quizzes = this.quizzes.filter((quiz) => quiz.qID != qID);
            Swal.fire('Success', 'Quiz deleted', 'success');
          },
          (error) => {
            Swal.fire('Error', 'Error in deleting quiz', 'error');
          }
        );
      }
    });
  }
}
