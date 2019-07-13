import { TestBed } from '@angular/core/testing';

import { MassConverterService } from './mass-converter.service';

describe('MassConverterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MassConverterService = TestBed.get(MassConverterService);
    expect(service).toBeTruthy();
  });
});
