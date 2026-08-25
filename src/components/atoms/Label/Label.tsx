import { StyledLabel } from './Label.styled';
import type { LabelProps } from './Label.types';

const Label = (props: LabelProps) => {
  return <StyledLabel {...props} />;
};

export default Label;
