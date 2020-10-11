/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SharecartcountService } from './sharecartcount.service';

describe('Service: Sharecartcount', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharecartcountService]
    });
  });

  it('should ...', inject([SharecartcountService], (service: SharecartcountService) => {
    expect(service).toBeTruthy();
  }));
});
