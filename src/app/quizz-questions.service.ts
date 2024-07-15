import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class QuizzQuestionsService {


question_and_answer_from_json: any[] = [];

constructor(private http: HttpClient) {
  this.http.get<any>("assets/questions.json").subscribe((result) => {
    this.question_and_answer_from_json = result;
  });
}
}
