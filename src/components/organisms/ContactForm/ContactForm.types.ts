import type { FormHTMLAttributes } from 'react';

export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

export interface ContactFormProps
  extends Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  /** Called with the validated values once the form passes validation. */
  onSubmit?: (values: ContactFormValues) => void | Promise<void>;
  /** Pre-fills the fields, e.g. for a logged-in visitor. */
  initialValues?: Partial<ContactFormValues>;
  /** Drives the submit button's loading state when the parent owns submission. */
  isSubmitting?: boolean;
  /** Errors supplied by the server, merged over the local validation errors. */
  serverErrors?: ContactFormErrors;
  /** Heading above the fields. */
  title?: string;
  /** Supporting text under the heading. */
  description?: string;
  submitLabel?: string;
  /** Confirmation shown after a successful submit. */
  successMessage?: string;
}
