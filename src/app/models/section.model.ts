import { Course } from './course.model';
import { Lesson } from './lesson.model';

export interface Section {
  id: number;
  title: string;
  subTitle: string;
  course: Course;
  lessons: Lesson[];
  created_at: Date;
  updated_at: Date;
}
