import { FieldWrapper } from './FormField.styled';
import type { FormFieldProps } from './FormField.types';

const FormField = (props: FormFieldProps) => {
  return <FieldWrapper {...props} />;
};

export default FormField;
