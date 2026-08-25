import { StyledButton } from './Button.styled';
import type { ButtonProps } from './Button.types';

const Button = (props: ButtonProps) => {
  return <StyledButton {...props} />;
};

export default Button;
