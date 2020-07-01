import { Section } from './section.model';
import { Content } from './content.model';

export interface Lesson {
  id: 1;
  section: Section;
  title: string;
  content: Content[];
  description: string;
  exercises: any;
  updated_at: Date;
  created_at: Date;
}
