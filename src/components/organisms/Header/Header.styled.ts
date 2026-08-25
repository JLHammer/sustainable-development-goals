import { Link } from 'react-router';
import styled, { css } from 'styled-components';
import type { StyledHeaderProps } from './Header.types';

export const HeaderRoot = styled.header<StyledHeaderProps>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  ${({ $sticky, theme }) =>
    $sticky &&
    css`
      position: sticky;
      top: 0;
      z-index: ${theme.zIndices.sticky};
    `};
`;

export const HeaderInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.space.md};
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  min-height: ${({ theme }) => theme.layout.headerHeight};
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.md}`};
`;

export const Brand = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
  margin-right: auto;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primaryDark};

  &:hover {
    text-decoration: none;
  }
`;

export const BrandLogo = styled.img`
  height: 2rem;
  width: auto;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
  order: 1;

  ${({ theme }) => theme.media.md} {
    order: 2;
  }
`;

export const MenuToggle = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  padding: 0;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: 1;
  color: ${({ theme }) => theme.colors.text};
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  cursor: pointer;

  ${({ theme }) => theme.media.md} {
    display: none;
  }
`;

export const NavSlot = styled.div`
  order: 2;
  width: 100%;

  ${({ theme }) => theme.media.md} {
    order: 1;
    width: auto;
  }
`;
