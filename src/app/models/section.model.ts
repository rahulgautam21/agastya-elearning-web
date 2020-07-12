import { Course } from './course.model';
import { Lesson } from './lesson.model';

export interface Section {
  id: number;
  name: string;
  description: string;
  sequence: number;
  lessons: Lesson[];
  created_at: Date;
  updated_at: Date;
}
