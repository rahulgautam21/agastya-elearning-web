import { Section } from './section.model';
import { Content } from './content.model';
import { Url } from './url.model';

export interface Lesson {
  id: number;
  name: string;
  description: string;
  sequence: number;
  content: Content[];
  animationUrl: Url[];
  youtubeUrl: Url[];
  updated_at: Date;
  created_at: Date;
}
