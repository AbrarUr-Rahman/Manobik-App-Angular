import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSetPassComponent } from './loginSetPass.component';

describe('LoginComponent', () => {
  let component: LoginSetPassComponent;
  let fixture: ComponentFixture<LoginSetPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginSetPassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginSetPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
