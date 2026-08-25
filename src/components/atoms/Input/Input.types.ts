import type { InputHTMLAttributes } from 'react';

export type InputSize = 'sm' | 'md' | 'lg';

/**
 * `size` is omitted from the native attributes because it collides with the
 * design-system size scale — use `inputSize` instead.
 */
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Control size. Defaults to `md`. */
  inputSize?: InputSize;
  /** Renders the invalid state and sets `aria-invalid`. */
  hasError?: boolean;
  /** Stretch the input to the full width of its container. */
  fullWidth?: boolean;
}

/** Transient props consumed by the styled layer only. */
export interface StyledInputProps {
  $inputSize: InputSize;
  $hasError: boolean;
  $fullWidth: boolean;
}
