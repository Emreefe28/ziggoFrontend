import { TestBed } from '@angular/core/testing';
import 'jasmine';
import { QuestionnaireService } from './questionnaire.service';

describe('QuestionnaireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionnaireService = TestBed.get(QuestionnaireService);
    expect(service).toBeTruthy();
  });
});
