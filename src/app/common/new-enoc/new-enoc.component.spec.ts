import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewENocComponent } from './new-enoc.component';

describe('NewENocComponent', () => {
  let component: NewENocComponent;
  let fixture: ComponentFixture<NewENocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewENocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewENocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
