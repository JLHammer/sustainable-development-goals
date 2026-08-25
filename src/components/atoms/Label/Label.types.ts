import type { LabelHTMLAttributes, ReactNode } from 'react';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  /** Id of the control this label describes. */
  htmlFor?: string;
  /** Appends a required marker after the text. */
  required?: boolean;
  /** Dims the label to match a disabled control. */
  disabled?: boolean;
  /** Keeps the label available to screen readers but hides it visually. */
  srOnly?: boolean;
  children: ReactNode;
}

/** Transient props consumed by the styled layer only. */
export interface StyledLabelProps {
  $disabled: boolean;
  $srOnly: boolean;
}
