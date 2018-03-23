import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayendComponent } from './dayend.component';

describe('DayendComponent', () => {
  let component: DayendComponent;
  let fixture: ComponentFixture<DayendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
