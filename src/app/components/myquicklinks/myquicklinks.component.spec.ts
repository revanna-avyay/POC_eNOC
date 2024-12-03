import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyquicklinksComponent } from './myquicklinks.component';

describe('MyquicklinksComponent', () => {
  let component: MyquicklinksComponent;
  let fixture: ComponentFixture<MyquicklinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyquicklinksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyquicklinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
