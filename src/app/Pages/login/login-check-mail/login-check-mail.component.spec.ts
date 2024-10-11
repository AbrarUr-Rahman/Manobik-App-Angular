import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCheckMailComponent } from './login-check-mail.component';

describe('LoginCheckMailComponent', () => {
  let component: LoginCheckMailComponent;
  let fixture: ComponentFixture<LoginCheckMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginCheckMailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginCheckMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
