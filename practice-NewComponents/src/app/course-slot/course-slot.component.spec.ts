import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSlotComponent } from './course-slot.component';

describe('CourseSlotComponent', () => {
  let component: CourseSlotComponent;
  let fixture: ComponentFixture<CourseSlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseSlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
