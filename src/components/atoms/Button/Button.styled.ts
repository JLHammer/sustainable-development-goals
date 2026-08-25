import styled, { css, keyframes } from 'styled-components';
import type { StyledButtonProps } from './Button.types';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const sizeStyles = {
  sm: css`
    padding: ${({ theme }) => `${theme.space.xs} ${theme.space.sm}`};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    min-height: 2rem;
  `,
  md: css`
    padding: ${({ theme }) => `${theme.space.sm} ${theme.space.lg}`};
    font-size: ${({ theme }) => theme.fontSizes.md};
    min-height: 2.75rem;
  `,
  lg: css`
    padding: ${({ theme }) => `${theme.space.md} ${theme.space.xl}`};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    min-height: 3.25rem;
  `,
};

const variantStyles = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textInverse};
    border-color: ${({ theme }) => theme.colors.primary};

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.primaryDark};
      border-color: ${({ theme }) => theme.colors.primaryDark};
    }
  `,
  secondary: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.surface};
    }
  `,
  ghost: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.text};
    border-color: transparent;

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.surfaceAlt};
    }
  `,
  danger: css`
    background-color: ${({ theme }) => theme.colors.danger};
    color: ${({ theme }) => theme.colors.textInverse};
    border-color: ${({ theme }) => theme.colors.danger};

    &:hover:not(:disabled) {
      filter: brightness(0.9);
    }
  `,
};

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space.sm};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radii.md};
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: ${({ theme }) => theme.lineHeights.tight};
  text-align: center;
  cursor: pointer;
  transition:
    background-color ${({ theme }) => theme.transitions.base},
    border-color ${({ theme }) => theme.transitions.base},
    filter ${({ theme }) => theme.transitions.base};

  ${({ $size }) => sizeStyles[$size]};
  ${({ $variant }) => variantStyles[$variant]};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }

  ${({ $isLoading }) =>
    $isLoading &&
    css`
      cursor: progress;
    `};
`;

export const Spinner = styled.span`
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: ${({ theme }) => theme.radii.circle};
  animation: ${spin} 700ms linear infinite;
  flex-shrink: 0;
`;

export const IconSlot = styled.span`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
`;
