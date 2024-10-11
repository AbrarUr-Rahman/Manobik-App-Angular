import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginForgotPassComponent } from './login-forgot-pass.component';

describe('LoginForgotPassComponent', () => {
  let component: LoginForgotPassComponent;
  let fixture: ComponentFixture<LoginForgotPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginForgotPassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginForgotPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
