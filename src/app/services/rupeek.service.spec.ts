import { TestBed, inject } from '@angular/core/testing';

import { RupeekService } from './rupeek.service';

describe('RupeekService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RupeekService]
    });
  });

  it('should be created', inject([RupeekService], (service: RupeekService) => {
    expect(service).toBeTruthy();
  }));
});
