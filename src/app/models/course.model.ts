import { Category } from './category.model';
import { Section } from './section.model';
import { Content } from './content.model';

export enum Class {
  'Class_1',
  'Class_2',
  'Class_3',
  'Class_4',
  'Class_5',
  'Class_6',
  'Class_7',
  'Class_8',
  'Class_9',
  'Class_10',
  'Class_11',
  'Class_12',
}
export interface Course {
  id: number;
  teachers: any;
  sections: Section[];
  name: string;
  description: string;
  requirements: string;
  objectives: string;
  likes: number;
  categories: Category[];
  content: Content[];
  language: string;
  class: Class;
  image: Content;
  updated_at: Date;
  created_at: Date;
}
