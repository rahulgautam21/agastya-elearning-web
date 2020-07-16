import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/course.model';
import CONSTANTS from '../../constants';

const featuredCourses = [
  {
    id: 1,
    subtitle: 'History',
    title: 'Mohenjo-daro Civilization',
    img: 'history',
  },
  {
    id: 2,
    subtitle: 'Science',
    title: 'Physical Chemistry for Class 12',
    img: 'science',
  },
  {
    id: 3,
    subtitle: 'Computer Science',
    title: 'Algorithms and Data Structures',
    img: 'computer',
  },
];

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss'],
})
export class FeaturedComponent {
  @Input()
  title: string = 'Featured Courses';

  @Input()
  vh: number;

  @Input()
  categories: Category[];
  featuredCat: Category[];
  start = 0;
  end = 1;

  categoryCourses: Observable<Course[]>;
  url = CONSTANTS.CONTENT_SERVICE_URL1;

  courses = featuredCourses;

  constructor() {}

  ngOnChanges() {
    if (this.categories) {
      this.start = 0;
      this.end = this.categories.length;
      this.setFeatured();
    }
  }

  onLeftArrowClick(event) {
    event.stopPropagation();
    if (this.start) {
      this.start--;
    } else {
      this.start = this.end - 1;
    }
    this.setFeatured();
  }

  onRightArrowClick(event) {
    event.stopPropagation();
    if (this.start >= this.end - 1) {
      this.start = 0;
    } else {
      this.start++;
    }
    this.setFeatured();
  }

  setFeatured() {
    let next = this.start;
    this.featuredCat = [];
    for (let index = 0; index <= 2; index++) {
      this.featuredCat[index] = this.categories[next];
      if (next === this.end - 1) {
        next = 0;
      } else {
        next++;
      }
    }
  }
}
