import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import CONSTANTS from '../constants';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { Course } from '../models/course.model';
import { Lesson } from '../models/lesson.model';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(
      CONSTANTS.CONTENT_SERVICE_URL + 'categories'
    );
  }

  searchCategories(search: string): Observable<Category[]> {
    return this.httpClient.get<Category[]>(
      CONSTANTS.CONTENT_SERVICE_URL +
        'categories' +
        `?title_contains=${search}&categoryDescription_contains=${search}`
    );
  }

  getCoursesByCategory(category: Category) {
    return this.httpClient.get<Course[]>(
      CONSTANTS.CONTENT_SERVICE_URL + 'courses' + `?category.id=${category.id}`
    );
  }

  searchCourses(search: string): Observable<Course[]> {
    return this.httpClient.get<Course[]>(
      CONSTANTS.CONTENT_SERVICE_URL +
        'courses' +
        `?title_contains=${search}&courseDescription_contains=${search}`
    );
  }

  getLessons(course: Course): Observable<Lesson[]> {
    return this.httpClient.get<Lesson[]>(
      CONSTANTS.CONTENT_SERVICE_URL + 'lessons' + `?course.id=${course.id}`
    );
  }
}
