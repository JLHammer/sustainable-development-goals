import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual weight of the button. Defaults to `primary`. */
  variant?: ButtonVariant;
  /** Control size. Defaults to `md`. */
  size?: ButtonSize;
  /** Stretch the button to the full width of its container. */
  fullWidth?: boolean;
  /** Show a spinner and block interaction while an action is in flight. */
  isLoading?: boolean;
  /** Icon rendered before the label. */
  iconLeft?: ReactNode;
  /** Icon rendered after the label. */
  iconRight?: ReactNode;
  children?: ReactNode;
}

/** Transient props consumed by the styled layer only. */
export interface StyledButtonProps {
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth: boolean;
  $isLoading: boolean;
}
