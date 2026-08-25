import { IconSlot, Spinner, StyledButton } from './Button.styled';
import type { ButtonProps } from './Button.types';

const Button = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  iconLeft,
  iconRight,
  disabled,
  type = 'button',
  children,
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton
      type={type}
      disabled={disabled || isLoading}
      aria-busy={isLoading || undefined}
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      $isLoading={isLoading}
      {...rest}
    >
      {isLoading && <Spinner aria-hidden="true" />}
      {!isLoading && iconLeft && <IconSlot aria-hidden="true">{iconLeft}</IconSlot>}
      {children}
      {iconRight && <IconSlot aria-hidden="true">{iconRight}</IconSlot>}
    </StyledButton>
  );
};

export default Button;
