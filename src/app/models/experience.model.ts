export interface Experience {
  readonly company: string;
  readonly role: string;
  readonly period: string;
  readonly highlights: readonly string[];
  readonly type: 'work' | 'teaching';
}
