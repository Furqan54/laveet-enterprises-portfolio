export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  amount: string;
  period?: string;
  status: string;

  /**
   * Optional project imagery.
   * Images can be added later without changing
   * the project architecture.
   */
  images?: ProjectImage[];
}