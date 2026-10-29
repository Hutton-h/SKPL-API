import type { PublicationFilterMode } from '@skpl/utils';

export type Kind = 'draft' | 'published';

export type { PublicationFilterMode };

export type Param = {
  status?: Kind;
  /** @deprecated Use `publicationFilter` instead (`never-published`, `has-published-version`, …). */
  hasPublishedVersion?: boolean;
};

export type PublicationFilterParam = { publicationFilter?: PublicationFilterMode };
