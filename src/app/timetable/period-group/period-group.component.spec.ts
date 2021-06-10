import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodGroupComponent } from './period-group.component';

describe('PeriodGroupComponent', () => {
  let component: PeriodGroupComponent;
  let fixture: ComponentFixture<PeriodGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
