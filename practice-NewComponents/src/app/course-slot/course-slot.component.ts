import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-course-slot',
  templateUrl: './course-slot.component.html',
  styleUrls: ['./course-slot.component.css']
})
export class CourseSlotComponent implements OnInit {

  @Input()
    course: Course;

  constructor() { }

  ngOnInit(): void {
  }

}
