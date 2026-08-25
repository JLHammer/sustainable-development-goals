import { NavLink } from 'react-router';
import styled, { css } from 'styled-components';
import type { StyledNavProps } from './NavBar.types';

export const Nav = styled.nav<StyledNavProps>`
  ${({ $orientation, $isOpen, theme }) =>
    $orientation === 'horizontal'
      ? css`
          /* Collapsed drawer below the header on small screens. */
          display: ${$isOpen ? 'block' : 'none'};
          width: 100%;

          ${theme.media.md} {
            display: block;
            width: auto;
          }
        `
      : css`
          display: block;
          width: 100%;
        `};
`;

export const NavItems = styled.ul<StyledNavProps>`
  display: flex;
  gap: ${({ theme }) => theme.space.xs};
  margin: 0;
  padding: 0;
  list-style: none;

  ${({ $orientation, theme }) =>
    $orientation === 'horizontal'
      ? css`
          flex-direction: column;

          ${theme.media.md} {
            flex-direction: row;
            align-items: center;
            gap: ${theme.space.sm};
          }
        `
      : css`
          flex-direction: column;
        `};
`;

export const NavItemLink = styled(NavLink)`
  display: block;
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.md}`};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.radii.sm};
  transition:
    color ${({ theme }) => theme.transitions.fast},
    background-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    text-decoration: none;
    background-color: ${({ theme }) => theme.colors.surfaceAlt};
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.surface};
  }
`;
