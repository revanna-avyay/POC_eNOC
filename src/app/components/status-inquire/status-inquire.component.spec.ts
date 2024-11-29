import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusInquireComponent } from './status-inquire.component';

describe('StatusInquireComponent', () => {
  let component: StatusInquireComponent;
  let fixture: ComponentFixture<StatusInquireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusInquireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusInquireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
