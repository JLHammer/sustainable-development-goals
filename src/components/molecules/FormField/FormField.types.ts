import type { ReactNode } from 'react';
import type { InputProps } from '../../atoms/Input/Input.types';

export interface FormFieldProps extends Omit<InputProps, 'id' | 'hasError' | 'children'> {
  /** Text shown in the field's label. */
  label: string;
  /** Explicit id — one is generated when omitted. */
  id?: string;
  /** Validation message. Its presence puts the field in the error state. */
  error?: string;
  /** Helper text shown under the control while there is no error. */
  hint?: string;
  /** Hide the label visually but keep it for screen readers. */
  hideLabel?: boolean;
  /**
   * Render a custom control instead of the default `Input`. Receives the
   * wiring the field owns so the control stays correctly labelled.
   */
  children?: (props: {
    id: string;
    describedBy: string | undefined;
    hasError: boolean;
  }) => ReactNode;
}

/** Transient props consumed by the styled layer only. */
export interface StyledFieldProps {
  $fullWidth: boolean;
}
