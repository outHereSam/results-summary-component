import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryBreakdownComponent } from './summary-breakdown.component';

describe('SummaryBreakdownComponent', () => {
  let component: SummaryBreakdownComponent;
  let fixture: ComponentFixture<SummaryBreakdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummaryBreakdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SummaryBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
