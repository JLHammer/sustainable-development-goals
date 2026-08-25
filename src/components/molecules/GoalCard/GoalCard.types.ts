import type { HTMLAttributes } from 'react';
import type { GoalNumber } from '../../../styles/theme';

/**
 * A single Sustainable Development Goal. Shared by `GoalCard` and `GoalList`.
 */
export interface Goal {
  /** Official goal number, 1–17. Drives the goal's brand colour. */
  number: GoalNumber;
  /** Short official title, e.g. "Clean Water and Sanitation". */
  title: string;
  /** One or two sentence summary shown on the card. */
  description: string;
  /** URL-friendly identifier used when routing to the details page. */
  slug: string;
  /** Official goal icon or a representative photo. */
  imageUrl?: string;
}

export type GoalCardLayout = 'vertical' | 'horizontal';

export interface GoalCardProps extends Omit<HTMLAttributes<HTMLElement>, 'onClick'> {
  goal: Goal;
  /** Card orientation. Defaults to `vertical`. */
  layout?: GoalCardLayout;
  /** Route the card links to. Defaults to `/goals/{slug}`. */
  to?: string;
  /** Optional completion percentage (0–100) rendered as a progress bar. */
  progress?: number;
}

/** Transient props consumed by the styled layer only. */
export interface StyledCardProps {
  $accent: string;
  $layout: GoalCardLayout;
}

export interface StyledProgressProps {
  $accent: string;
  $value: number;
}
