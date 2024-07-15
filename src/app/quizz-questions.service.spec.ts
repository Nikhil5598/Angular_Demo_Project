import { TestBed } from '@angular/core/testing';

import { QuizzQuestionsService } from './quizz-questions.service';

describe('QuizzQuestionsService', () => {
  let service: QuizzQuestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizzQuestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
