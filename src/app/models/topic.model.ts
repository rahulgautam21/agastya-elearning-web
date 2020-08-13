import { SubTopic } from './sub-topic.model';
import { Category } from './category.model';

export interface Topic {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
  categories: Category[];
  subTopics: SubTopic[];
}
