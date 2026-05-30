export interface Project {
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly overview: string;
  readonly problem: string;
  readonly challenges: readonly string[];
  readonly architectureDecisions: readonly string[];
  readonly stack: readonly string[];
  readonly keyFeatures: readonly string[];
  readonly engineeringHighlights: readonly string[];
  readonly liveDemoUrl?: string;
  readonly githubUrl?: string;
}
