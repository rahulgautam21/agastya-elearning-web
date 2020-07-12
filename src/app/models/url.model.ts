export enum UrlType {
  'youtube',
  'animation',
}

export interface Url {
  id: number;
  name: string;
  url: string;
  type: UrlType;
}
