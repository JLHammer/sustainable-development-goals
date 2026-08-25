import styled from 'styled-components';
import type { StyledFieldProps } from './FormField.types';

export const FieldWrapper = styled.div<StyledFieldProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xs};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
`;

export const HintText = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const ErrorText = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.danger};
`;
