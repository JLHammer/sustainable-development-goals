import type { HTMLAttributes } from 'react';
import type { Goal } from '../../molecules/GoalCard/GoalCard.types';

export interface GoalListProps extends HTMLAttributes<HTMLElement> {
  goals: Goal[];
  /** Heading rendered above the grid. Omit to render the grid on its own. */
  title?: string;
  /** Supporting text shown under the heading. */
  description?: string;
  /** Renders placeholder tiles instead of cards. */
  isLoading?: boolean;
  /** Number of placeholder tiles while loading. Defaults to 6. */
  skeletonCount?: number;
  /** Message shown when `goals` is empty and nothing is loading. */
  emptyMessage?: string;
  /** Minimum column width for the responsive grid. Defaults to `16rem`. */
  minColumnWidth?: string;
  /** Per-goal completion percentages, keyed by goal number. */
  progressByGoal?: Partial<Record<Goal['number'], number>>;
}

/** Transient props consumed by the styled layer only. */
export interface StyledGridProps {
  $minColumnWidth: string;
}
