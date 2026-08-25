import type { HTMLAttributes } from 'react';

export interface NavItem {
  /** Route path handled by the app router. */
  to: string;
  label: string;
  /** Match the route exactly instead of by prefix. Use for `/`. */
  end?: boolean;
}

export type NavBarOrientation = 'horizontal' | 'vertical';

export interface NavBarProps extends HTMLAttributes<HTMLElement> {
  items: NavItem[];
  /** Layout direction. Defaults to `horizontal`. */
  orientation?: NavBarOrientation;
  /** Whether the collapsed mobile menu is expanded. */
  isOpen?: boolean;
  /** Called after a link is activated, so a parent can close the mobile menu. */
  onNavigate?: () => void;
}

/** Transient props consumed by the styled layer only. */
export interface StyledNavProps {
  $orientation: NavBarOrientation;
  $isOpen: boolean;
}
