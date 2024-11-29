import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallCalenderComponent } from './viewall-calender.component';

describe('ViewallCalenderComponent', () => {
  let component: ViewallCalenderComponent;
  let fixture: ComponentFixture<ViewallCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewallCalenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewallCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
