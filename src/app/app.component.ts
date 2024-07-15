import { Component } from '@angular/core';
import { QuizzQuestionsService } from './quizz-questions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Qizz_app';

  IsStart: boolean = false;
  IsWelcome: boolean = true;
  IsQuizz: boolean = false;
  question_and_answer: any[] = [];
  currentQuestionIndex: number = 0;
  selectedAnswer: string | null = null;
  IsSubmit: boolean = false;
  score: number = 0;
  selectedAnswers: any[] = [];
  
constructor(private from_ServiceClass_Questions: QuizzQuestionsService) { }

// start() method is used to start the quiz
Start() {
  this.IsStart = true;
  this.IsWelcome = false;
  
}

// cancel() method is used to cancel the quiz
Cancel() {
  this.IsWelcome = true;
  this.IsStart = false;
}

// questions() method is used to display the questions
questions() {
  this.IsQuizz = true;
  this.IsStart = false;

  // Get the questions from the service class and stores in question_and_answer array
  this.question_and_answer = this.from_ServiceClass_Questions.question_and_answer_from_json;
}

Previous() {
  if (this.currentQuestionIndex > 0) {
    this.selectedAnswers[this.currentQuestionIndex] = this.selectedAnswer; // Store the selected answer
    this.currentQuestionIndex--;
    this.selectedAnswer = this.selectedAnswers[this.currentQuestionIndex]; // Retrieve the previous answer
    
  }
}

Next() {
  if (this.currentQuestionIndex < this.question_and_answer.length - 1) {
    this.selectedAnswers[this.currentQuestionIndex] = this.selectedAnswer; // Store the selected answer in selectsAnserws Array
    this.currentQuestionIndex++;
    this.selectedAnswer = this.selectedAnswers[this.currentQuestionIndex]; // Retrieve the next answer
    
  } else if (this.currentQuestionIndex == this.question_and_answer.length - 1) {
    this.selectedAnswers[this.currentQuestionIndex] = this.selectedAnswer; // Store the last answer
    this.IsSubmit = true;
    this.IsQuizz = false;
    this.result(); // Calculate the result
  }
}

result() {
  
  for (let i = 0; i < this.question_and_answer.length; i++) {
    if (this.question_and_answer[i].correct === this.selectedAnswers[i]) {
      this.score += 10;
    }
  }
}
}