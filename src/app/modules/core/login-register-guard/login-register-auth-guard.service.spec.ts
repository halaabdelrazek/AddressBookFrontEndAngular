import { TestBed } from '@angular/core/testing';

import { LoginRegisterAuthGuardService } from './login-register-auth-guard.service';

describe('LoginRegisterAuthGuardService', () => {
  let service: LoginRegisterAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginRegisterAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
