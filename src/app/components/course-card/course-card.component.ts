import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../models/course.model';
import CONSTANTS from '../../constants';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent implements OnInit {
  @Input()
  course: Course;

  url: string;

  constructor() {}

  ngOnInit(): void {
    this.url =
      CONSTANTS.CONTENT_SERVICE_URL1 +
      this.course.content[0].formats.thumbnail.url;
  }
}
