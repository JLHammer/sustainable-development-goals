import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.lg};
  width: 100%;
  max-width: 40rem;
  padding: ${({ theme }) => theme.space.xl};
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

export const FormHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xs};
`;

export const FormTitle = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

export const FormDescription = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const FieldRow = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space.lg};

  ${({ theme }) => theme.media.md} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const TextArea = styled.textarea<{ $hasError: boolean }>`
  display: block;
  width: 100%;
  min-height: 9rem;
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.md}`};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid
    ${({ theme, $hasError }) => ($hasError ? theme.colors.danger : theme.colors.border)};
  border-radius: ${({ theme }) => theme.radii.md};
  resize: vertical;
  transition:
    border-color ${({ theme }) => theme.transitions.base},
    box-shadow ${({ theme }) => theme.transitions.base};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
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

export const SuccessMessage = styled.p`
  margin: 0;
  padding: ${({ theme }) => theme.space.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.success};
  background-color: ${({ theme }) => theme.colors.surface};
  border-left: 4px solid ${({ theme }) => theme.colors.success};
  border-radius: ${({ theme }) => theme.radii.sm};
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
`;
