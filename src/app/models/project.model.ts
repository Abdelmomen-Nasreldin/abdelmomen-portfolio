export interface ProjectImage {
  readonly src: string;
  readonly previewSrc?: string;
  readonly alt: string;
  readonly caption: string;
  readonly width: number;
  readonly height: number;
}
export interface Project {
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly overview: string;
  readonly problem: string;
  readonly stack: readonly string[];
  readonly role: string;
  readonly status: string;
  readonly context: string;
  readonly decisions: readonly { title: string; approach: string; tradeoff: string }[];
  readonly outcomes: readonly string[];
  readonly reflection: string;
  readonly attribution: string;
  readonly images: readonly ProjectImage[];
  readonly evidence: readonly { label: string; url: string }[];
}
