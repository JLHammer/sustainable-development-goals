import { RequiredMark, StyledLabel } from './Label.styled';
import type { LabelProps } from './Label.types';

const Label = ({
  required = false,
  disabled = false,
  srOnly = false,
  children,
  ...rest
}: LabelProps) => {
  return (
    <StyledLabel $disabled={disabled} $srOnly={srOnly} {...rest}>
      {children}
      {required && (
        <RequiredMark aria-hidden="true" title="Required">
          *
        </RequiredMark>
      )}
    </StyledLabel>
  );
};

export default Label;
