import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLeftsideComponent } from './login-leftside.component';

describe('LoginLeftsideComponent', () => {
  let component: LoginLeftsideComponent;
  let fixture: ComponentFixture<LoginLeftsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginLeftsideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginLeftsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
