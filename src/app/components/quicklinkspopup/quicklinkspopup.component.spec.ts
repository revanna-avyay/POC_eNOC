import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuicklinkspopupComponent } from './quicklinkspopup.component';

describe('QuicklinkspopupComponent', () => {
  let component: QuicklinkspopupComponent;
  let fixture: ComponentFixture<QuicklinkspopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuicklinkspopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuicklinkspopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
