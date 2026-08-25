import styled, { css } from 'styled-components';
import type { StyledLabelProps } from './Label.types';

export const StyledLabel = styled.label<StyledLabelProps>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.xs};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: ${({ theme }) => theme.lineHeights.tight};
  color: ${({ theme }) => theme.colors.text};

  ${({ $disabled }) =>
    $disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.6;
    `};

  ${({ $srOnly }) =>
    $srOnly &&
    css`
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip-path: inset(50%);
      white-space: nowrap;
      border: 0;
    `};
`;

export const RequiredMark = styled.span`
  color: ${({ theme }) => theme.colors.danger};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
