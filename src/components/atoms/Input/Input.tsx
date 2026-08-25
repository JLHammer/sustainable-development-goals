import { StyledInput } from './Input.styled';
import type { InputProps } from './Input.types';

const Input = ({
  inputSize = 'md',
  hasError = false,
  fullWidth = true,
  type = 'text',
  ...rest
}: InputProps) => {
  return (
    <StyledInput
      type={type}
      aria-invalid={hasError || undefined}
      $inputSize={inputSize}
      $hasError={hasError}
      $fullWidth={fullWidth}
      {...rest}
    />
  );
};

export default Input;
