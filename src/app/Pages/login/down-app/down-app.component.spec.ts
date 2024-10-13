import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownAppComponent } from './down-app.component';

describe('DownAppComponent', () => {
  let component: DownAppComponent;
  let fixture: ComponentFixture<DownAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DownAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
