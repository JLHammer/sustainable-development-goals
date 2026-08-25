import { StyledImage } from './Image.styled';
import type { ImageProps } from './Image.types';

const Image = (props: ImageProps) => {
  return <StyledImage {...props} />;
};

export default Image;
