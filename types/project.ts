export interface Project {
  _id: string;
  name: string;
  tagline?: string;
  description?: string;
  challenge?: string;
  solution?: string;
  result?: string;
  category?: string;
  year?: string;
  slug: string;
  image?: string;
  images?: string[];
  stack?: string[];
  projectLink?: string;
  accentColor?: string;
}