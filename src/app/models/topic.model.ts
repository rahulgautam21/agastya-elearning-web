import { SubTopic } from './sub-topic.model';

export interface Topic {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
  subTopics: SubTopic[];
}
