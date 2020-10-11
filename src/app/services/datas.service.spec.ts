/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DatasService } from './datas.service';

describe('Service: Datas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatasService]
    });
  });

  it('should ...', inject([DatasService], (service: DatasService) => {
    expect(service).toBeTruthy();
  }));
});
