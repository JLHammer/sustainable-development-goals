import type { HTMLAttributes } from 'react';

export interface FooterLink {
  label: string;
  /** Internal route path. Mutually exclusive with `href`. */
  to?: string;
  /** External URL. Opens in a new tab. */
  href?: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  /** Link columns rendered in the upper part of the footer. */
  columns?: FooterColumn[];
  /** Short blurb shown beside the columns. */
  description?: string;
  /** Organisation name used in the copyright line. */
  organisation?: string;
  /** Copyright year. Defaults to the current year. */
  year?: number;
}
