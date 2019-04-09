import { TestBed } from '@angular/core/testing';

import { TranslationService } from './translation.service';
import { TranslateService } from '@ngx-translate/core';


describe('TranslationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  
  it('should be created', () => {
    const service: TranslationService = TestBed.get(TranslationService);
    expect(service).toBeTruthy();
  });
});
