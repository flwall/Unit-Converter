import { TestBed } from '@angular/core/testing';

import { LengthConverterService } from './length-converter.service';

describe('LengthConverterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LengthConverterService = TestBed.get(LengthConverterService);
    expect(service).toBeTruthy();
  });
});
