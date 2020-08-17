export interface Media {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  created_at: Date;
  updated_at: Date;
}

export interface Formats {
  large?: MediaAttribute;
  small?: MediaAttribute;
  medium?: MediaAttribute;
  thumbnail?: MediaAttribute;
}

export interface MediaAttribute {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  path: null;
  size: number;
  width: number;
  height: number;
}
