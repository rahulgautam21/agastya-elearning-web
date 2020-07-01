import { Category } from './category.model';
import { Section } from './section.model';
import { Content } from './content.model';

export interface Course {
  id: number;
  title: string;
  courseDescription: string;
  category: Category;
  content: Content[];
  language: string;
  likes: number;
  objectives: string;
  prerequisites: string;
  sections: Section[];
  teachers: any;
  courses: Course[];
  updated_at: Date;
  created_at: Date;
}
