import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { ContentService } from 'src/app/services/content.service';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/course.model';

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
export class FeaturedComponent implements OnInit {
  @Input()
  category: Category;
  categoryCourses: Observable<Course[]>;

  courses = featuredCourses;

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    if (this.category) {
      this.categoryCourses = this.contentService.getCoursesByCategory(
        this.category
      );
    }
  }
}
