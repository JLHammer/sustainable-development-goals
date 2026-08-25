import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import Button from '../../atoms/Button/Button';
import FormField from '../../molecules/FormField/FormField';
import {
  Actions,
  FieldRow,
  Form,
  FormDescription,
  FormHeader,
  FormTitle,
  SuccessMessage,
  TextArea,
} from './ContactForm.styled';
import type {
  ContactFormErrors,
  ContactFormProps,
  ContactFormValues,
} from './ContactForm.types';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EMPTY_VALUES: ContactFormValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const validate = (values: ContactFormValues): ContactFormErrors => {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.';
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!EMAIL_PATTERN.test(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.subject.trim()) {
    errors.subject = 'Please enter a subject.';
  }

  if (values.message.trim().length < 10) {
    errors.message = 'Please write at least 10 characters.';
  }

  return errors;
};

const ContactForm = ({
  onSubmit,
  initialValues,
  isSubmitting = false,
  serverErrors,
  title = 'Get in touch',
  description,
  submitLabel = 'Send message',
  successMessage = 'Thanks for reaching out — we will get back to you shortly.',
  ...rest
}: ContactFormProps) => {
  const [values, setValues] = useState<ContactFormValues>({
    ...EMPTY_VALUES,
    ...initialValues,
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const visibleErrors: ContactFormErrors = { ...errors, ...serverErrors };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setValues((previous) => ({ ...previous, [name]: value }));

    // Clear the field's error as soon as the visitor starts correcting it.
    setErrors((previous) => {
      if (!(name in previous)) return previous;
      const next = { ...previous };
      delete next[name as keyof ContactFormValues];
      return next;
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setIsSubmitted(false);
      return;
    }

    await onSubmit?.(values);
    setValues({ ...EMPTY_VALUES, ...initialValues });
    setIsSubmitted(true);
  };

  return (
    <Form noValidate onSubmit={handleSubmit} {...rest}>
      <FormHeader>
        <FormTitle>{title}</FormTitle>
        {description && <FormDescription>{description}</FormDescription>}
      </FormHeader>

      {isSubmitted && <SuccessMessage role="status">{successMessage}</SuccessMessage>}

      <FieldRow>
        <FormField
          label="Name"
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={handleChange}
          error={visibleErrors.name}
          disabled={isSubmitting}
          required
        />
        <FormField
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          error={visibleErrors.email}
          disabled={isSubmitting}
          required
        />
      </FieldRow>

      <FormField
        label="Subject"
        name="subject"
        value={values.subject}
        onChange={handleChange}
        error={visibleErrors.subject}
        disabled={isSubmitting}
        required
      />

      <FormField
        label="Message"
        name="message"
        error={visibleErrors.message}
        hint="Tell us which goal you are interested in."
        disabled={isSubmitting}
        required
      >
        {({ id, describedBy, hasError }) => (
          <TextArea
            id={id}
            name="message"
            value={values.message}
            onChange={handleChange}
            disabled={isSubmitting}
            required
            aria-invalid={hasError || undefined}
            aria-describedby={describedBy}
            $hasError={hasError}
          />
        )}
      </FormField>

      <Actions>
        <Button type="submit" isLoading={isSubmitting}>
          {submitLabel}
        </Button>
      </Actions>
    </Form>
  );
};

export default ContactForm;
