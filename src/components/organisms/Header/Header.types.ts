import type { HTMLAttributes, ReactNode } from 'react';
import type { NavItem } from '../NavBar/NavBar.types';

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  /** Navigation entries handed to the `NavBar`. */
  navItems: NavItem[];
  /** Wordmark shown next to the logo. */
  brandName?: string;
  /** Route the brand links to. Defaults to `/`. */
  brandTo?: string;
  /** Logo image source. Falls back to a text-only wordmark. */
  logoSrc?: string;
  /** Extra content on the right of the bar, e.g. a login button. */
  actions?: ReactNode;
  /** Keep the header pinned to the top of the viewport. Defaults to `true`. */
  sticky?: boolean;
}

/** Transient props consumed by the styled layer only. */
export interface StyledHeaderProps {
  $sticky: boolean;
}
