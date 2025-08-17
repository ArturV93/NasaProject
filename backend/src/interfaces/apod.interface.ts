export interface IApod {
    date: string;
    title: string;
    explanation: string;
    url: string;
    hdurl?: string;
    media_type: string;
    service_version: string;
}

export interface IApodResponse {
  copyright?: string;
  date: string;
  explanation: string;
  hdurl?: string;
  media_type: 'image' | 'video';
  service_version: string;
  title: string;
  url: string;
}