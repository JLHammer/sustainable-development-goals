import { useId } from 'react';
import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';
import { ErrorText, FieldWrapper, HintText } from './FormField.styled';
import type { FormFieldProps } from './FormField.types';

const FormField = ({
  label,
  id,
  error,
  hint,
  hideLabel = false,
  required = false,
  disabled = false,
  fullWidth = true,
  children,
  ...inputProps
}: FormFieldProps) => {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const errorId = `${fieldId}-error`;
  const hintId = `${fieldId}-hint`;

  const hasError = Boolean(error);
  // An error replaces the hint, so only one description is ever referenced.
  const describedBy = hasError ? errorId : hint ? hintId : undefined;

  return (
    <FieldWrapper $fullWidth={fullWidth}>
      <Label htmlFor={fieldId} required={required} disabled={disabled} srOnly={hideLabel}>
        {label}
      </Label>

      {children ? (
        children({ id: fieldId, describedBy, hasError })
      ) : (
        <Input
          id={fieldId}
          required={required}
          disabled={disabled}
          fullWidth={fullWidth}
          hasError={hasError}
          aria-describedby={describedBy}
          {...inputProps}
        />
      )}

      {hasError ? (
        <ErrorText id={errorId} role="alert">
          {error}
        </ErrorText>
      ) : (
        hint && <HintText id={hintId}>{hint}</HintText>
      )}
    </FieldWrapper>
  );
};

export default FormField;
