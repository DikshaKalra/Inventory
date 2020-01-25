import { TestBed } from '@angular/core/testing';

import { ServiceCheckoutService } from './service-checkout.service';

describe('ServiceCheckoutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceCheckoutService = TestBed.get(ServiceCheckoutService);
    expect(service).toBeTruthy();
  });
});
