import styled, { css } from 'styled-components';
import type { StyledImageProps } from './Image.types';

export const StyledImage = styled.img<StyledImageProps>`
  display: block;
  width: 100%;
  height: ${({ $ratio }) => ($ratio ? '100%' : 'auto')};
  object-fit: ${({ $fit }) => $fit};
  background-color: ${({ theme }) => theme.colors.surfaceAlt};

  ${({ $ratio }) =>
    $ratio &&
    css`
      aspect-ratio: ${$ratio};
    `};

  ${({ theme, $radius }) =>
    $radius !== 'none' &&
    css`
      border-radius: ${theme.radii[$radius]};
    `};
`;
