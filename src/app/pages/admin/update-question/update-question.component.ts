import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {
  public Editor = ClassicEditor;
  qId: number;
  qTitle: string;
  questionId: number; // Ensure this is declared as a number
  question: any = {
    quiz: {},
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: ''
  };

  constructor(
    private _route: ActivatedRoute,
    private _question: QuestionService
  ) {}

  ngOnInit(): void {
    // Retrieve parameters from the route
    this.qId = +this._route.snapshot.params['qid']; // Convert to number
    this.qTitle = this._route.snapshot.params['title'];
    this.questionId = +this._route.snapshot.params['questionId']; // Convert to number

    console.log('Quiz ID:', this.qId); // Debugging
    console.log('Quiz Title:', this.qTitle); // Debugging
    console.log('Question ID:', this.questionId); // Debugging

    // Load the question if questionId is defined
    if (this.questionId) {
      this.loadQuestion(); // Fetch the question details
    } else {
    }
  }

  loadQuestion() {
    // Fetch the existing question to prefill the form
    this._question.getQuestion(this.questionId).subscribe(
      (data: any) => {
        this.question = data; // Populate the question object
      },
      (error) => {
        Swal.fire('Error', 'Error in loading question', 'error');
        console.error('Error fetching question:', error);
      }
    );
  }

  formSubmit() {
    if (this.question.content.trim() === '' || this.question.content == null) {
      return;
    }
    if (this.question.option1.trim() === '' || this.question.option1 == null) {
      return;
    }
    if (this.question.option2.trim() === '' || this.question.option2 == null) {
      return;
    }

    // Update question instead of adding a new one
    this._question.updateQuestion(this.questionId, this.question).subscribe(
      (data: any) => {
        Swal.fire('Success', 'Question Updated', 'success');
      },
      (error) => {
        Swal.fire('Error', 'Error in updating question', 'error');
      }
    );
  }
}
