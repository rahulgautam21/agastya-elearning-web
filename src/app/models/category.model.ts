import { Course } from './course.model';
import { Content } from './content.model';

export interface Category {
  id: number;
  name: string;
  description: string;
  courses: Course[];
  image: Content;
  featuredCourse: Course;
  updated_at: Date;
}
