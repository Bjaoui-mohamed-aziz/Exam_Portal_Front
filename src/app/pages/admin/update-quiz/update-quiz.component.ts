import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  constructor(private _route: ActivatedRoute, 
              private _quiz:QuizService,
              private _cat:CategoryService,  
              private _router:Router,
              private toastr: ToastrService){}

  qID = 0;
  quiz;
  categories;


  ngOnInit(): void {
  this.qID = this._route.snapshot.params['qid'];  
  //alert  (this.qID);
  this._quiz.getQuiz(this.qID).subscribe(
    (data:any)=>{
      this.quiz=data;
      console.log(this.quiz)
    },
    (error)=>{
console.log(error)
    }
  );
  this._cat.categories().subscribe(
    (data:any)=>{
    this.categories = data;
  },
  (error) => {
    alert('error in loading categories');
  }
  );
  
}
public updateData(){

this._quiz.updateQuiz(this.quiz).subscribe(
  (data)=> {
    this.toastr.success('Quiz added successfully!', 'Success');
    this._router.navigate(['/admin/quizzes'])
}, (error)=>{
    this.toastr.error('Error while updating quiz!', 'Error');
    console.log(error)
});
}
}
