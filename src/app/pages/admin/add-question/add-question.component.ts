import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  
  public Editor = ClassicEditor;
  qId;
  qTitle;
  question={
    quiz:{},
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:','}


  constructor(private _route:ActivatedRoute,
              private _question:QuestionService,
              private toastr: ToastrService,
              private router: Router
            ){}

  ngOnInit(): void {
    this.qId= this._route.snapshot.params['qid'];
    this.qTitle = this._route.snapshot.params['title']
    this.question.quiz['qID']= this.qId;
  }

  formSubmit(){

    if(this.question.content.trim()=='' || this.question.content == null)
{
  return;
}
if(this.question.option1.trim()=='' || this.question.option1 == null)
{
  return;
}
if(this.question.option2.trim()=='' || this.question.option2 == null)
{
  return;
}

this._question.addQuestion(this.question).subscribe((data:any) =>{
  this.toastr.success('Question added successfully!', 'Success');
  this.router.navigate(['/admin/quizzes']);  this.question.content=''
  this.question.option1=''
  this.question.option2=''
  this.question.option3=''
  this.question.option4=''
  this.question.answer=''

},
(error) =>{
  this.toastr.error('Something wrong!', 'Error');
})
  }
}