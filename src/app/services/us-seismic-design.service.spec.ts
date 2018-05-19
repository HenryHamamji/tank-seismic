import { TestBed, inject } from '@angular/core/testing';

import { UsSeismicDesignService } from './us-seismic-design.service';

describe('UsSeismicDesignService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsSeismicDesignService]
    });
  });

  it('should be created', inject([UsSeismicDesignService], (service: UsSeismicDesignService) => {
    expect(service).toBeTruthy();
  }));
});
