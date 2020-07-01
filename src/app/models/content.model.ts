import { ContentAttribute } from './contentAttributes.model';

export interface Content extends ContentAttribute {
  id: number;
  name: string;
  caption: string;
  alternativeText: string;
  formats: {
    large: ContentAttribute;
    medium: ContentAttribute;
    small: ContentAttribute;
    thumbnail: ContentAttribute;
  };
  previewUrl: string;
  provider: string;
  provider_metadata: string;
  created_at: Date;
  updated_at: Date;
}
