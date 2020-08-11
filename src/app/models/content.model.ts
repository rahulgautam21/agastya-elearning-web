import { SubTopic } from './sub-topic.model';
import { Media } from './media.model';

export interface Content {
  id: number;
  name: string;
  url: string;
  description?: string;
  subTopic: SubTopic;
  level: string;
  language: string;
  audience: string;
  created_at: Date;
  updated_at: Date;
  media?: Media[];
  classes: Class[];
}

export interface Class {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
}
