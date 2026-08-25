import styled, { css } from 'styled-components';
import type { StyledInputProps } from './Input.types';

const sizeStyles = {
  sm: css`
    padding: ${({ theme }) => `${theme.space.xs} ${theme.space.sm}`};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    min-height: 2rem;
  `,
  md: css`
    padding: ${({ theme }) => `${theme.space.sm} ${theme.space.md}`};
    font-size: ${({ theme }) => theme.fontSizes.md};
    min-height: 2.75rem;
  `,
  lg: css`
    padding: ${({ theme }) => `${theme.space.md} ${theme.space.lg}`};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    min-height: 3.25rem;
  `,
};

export const StyledInput = styled.input<StyledInputProps>`
  display: block;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid
    ${({ theme, $hasError }) => ($hasError ? theme.colors.danger : theme.colors.border)};
  border-radius: ${({ theme }) => theme.radii.md};
  transition:
    border-color ${({ theme }) => theme.transitions.base},
    box-shadow ${({ theme }) => theme.transitions.base};

  ${({ $inputSize }) => sizeStyles[$inputSize]};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }

  &:hover:not(:disabled):not(:read-only) {
    border-color: ${({ theme, $hasError }) =>
      $hasError ? theme.colors.danger : theme.colors.borderStrong};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme, $hasError }) =>
      $hasError ? theme.colors.danger : theme.colors.focus};
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    background-color: ${({ theme }) => theme.colors.surface};
  }
`;
