import { Course } from './course.model';

export interface Category {
  id: number;
  title: string;
  categoryDescription: string;
  courses: Course[];
  updated_at: Date;
}
