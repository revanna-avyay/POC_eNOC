import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuicklinkCardComponent } from './quicklink-card.component';

describe('QuicklinkCardComponent', () => {
  let component: QuicklinkCardComponent;
  let fixture: ComponentFixture<QuicklinkCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuicklinkCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuicklinkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
