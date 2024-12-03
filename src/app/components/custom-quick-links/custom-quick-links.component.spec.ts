import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomQuickLinksComponent } from './custom-quick-links.component';

describe('CustomQuickLinksComponent', () => {
  let component: CustomQuickLinksComponent;
  let fixture: ComponentFixture<CustomQuickLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomQuickLinksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomQuickLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
