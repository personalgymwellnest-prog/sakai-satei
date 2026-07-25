export interface WardData {
  slug: string;
  name: string;
  reading: string;
  catchCopy: string;
  overview: string;
  marketSummary: string;
  characteristics: string[];
  areas: string[];
}

export interface SceneData {
  slug: string;
  name: string;
  catchCopy: string;
  leadText: string;
  worries: string[];
  body: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ReasonItem {
  number: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

export interface VoiceItem {
  area: string;
  propertyType: string;
  age: string;
  comment: string;
}

export interface AssessmentFormValues {
  propertyType: string;
  prefecture: string;
  city: string;
  buildingAge: string;
  size: string;
  name: string;
  phone: string;
  email: string;
}

export interface ArticleSection {
  heading: string;
  body: string;
}

export interface ArticleData {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  leadText: string;
  sections: ArticleSection[];
  relatedSceneSlug?: string;
  relatedWardSlug?: string;
}
