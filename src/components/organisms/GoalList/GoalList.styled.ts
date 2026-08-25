import styled, { keyframes } from 'styled-components';
import type { StyledGridProps } from './GoalList.types';

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.45;
  }
`;

export const Section = styled.section`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.space['2xl']} ${theme.space.md}`};
`;

export const SectionHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.sm};
  margin-bottom: ${({ theme }) => theme.space.xl};
`;

export const SectionTitle = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
`;

export const SectionDescription = styled.p`
  margin: 0;
  max-width: 60ch;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const Grid = styled.ul<StyledGridProps>`
  display: grid;
  grid-template-columns: ${({ $minColumnWidth }) =>
    `repeat(auto-fill, minmax(min(${$minColumnWidth}, 100%), 1fr))`};
  gap: ${({ theme }) => theme.space.lg};
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const SkeletonCard = styled.li`
  min-height: 18rem;
  background-color: ${({ theme }) => theme.colors.surfaceAlt};
  border-radius: ${({ theme }) => theme.radii.md};
  animation: ${pulse} 1.4s ease-in-out infinite;
`;

export const EmptyState = styled.p`
  margin: 0;
  padding: ${({ theme }) => theme.space.xl};
  text-align: center;
  color: ${({ theme }) => theme.colors.textMuted};
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px dashed ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
`;
