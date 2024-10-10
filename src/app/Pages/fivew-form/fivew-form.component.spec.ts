import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FivewFormComponent } from './fivew-form.component';

describe('FivewFormComponent', () => {
  let component: FivewFormComponent;
  let fixture: ComponentFixture<FivewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FivewFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FivewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
