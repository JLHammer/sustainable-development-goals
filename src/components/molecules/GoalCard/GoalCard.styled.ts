import { Link } from 'react-router';
import styled, { css } from 'styled-components';
import type { StyledCardProps, StyledProgressProps } from './GoalCard.types';

export const CardLink = styled(Link)<StyledCardProps>`
  display: grid;
  overflow: hidden;
  height: 100%;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-top: 4px solid ${({ $accent }) => $accent};
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition:
    transform ${({ theme }) => theme.transitions.base},
    box-shadow ${({ theme }) => theme.transitions.base};

  ${({ $layout }) =>
    $layout === 'horizontal'
      ? css`
          grid-template-columns: minmax(0, 8rem) 1fr;
          align-items: stretch;
        `
      : css`
          grid-template-rows: auto 1fr;
        `};

  &:hover,
  &:focus-visible {
    text-decoration: none;
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

export const Media = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.surfaceAlt};
`;

export const GoalNumberBadge = styled.span<{ $accent: string }>`
  position: absolute;
  top: ${({ theme }) => theme.space.sm};
  left: ${({ theme }) => theme.space.sm};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
  height: 2rem;
  padding: 0 ${({ theme }) => theme.space.xs};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.textInverse};
  background-color: ${({ $accent }) => $accent};
  border-radius: ${({ theme }) => theme.radii.sm};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.sm};
  padding: ${({ theme }) => theme.space.md};
`;

export const Title = styled.h3`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const Description = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const ProgressTrack = styled.div`
  width: 100%;
  height: 0.5rem;
  margin-top: auto;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.surfaceAlt};
  border-radius: ${({ theme }) => theme.radii.pill};
`;

export const ProgressBar = styled.div<StyledProgressProps>`
  width: ${({ $value }) => `${$value}%`};
  height: 100%;
  background-color: ${({ $accent }) => $accent};
  border-radius: inherit;
  transition: width ${({ theme }) => theme.transitions.slow};
`;
