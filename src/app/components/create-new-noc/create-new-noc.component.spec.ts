import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewNocComponent } from './create-new-noc.component';

describe('CreateNewNocComponent', () => {
  let component: CreateNewNocComponent;
  let fixture: ComponentFixture<CreateNewNocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateNewNocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewNocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
