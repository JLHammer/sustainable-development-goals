import { Link } from 'react-router';
import styled, { css } from 'styled-components';

export const FooterRoot = styled.footer`
  width: 100%;
  margin-top: auto;
  color: ${({ theme }) => theme.colors.textInverse};
  background-color: ${({ theme }) => theme.colors.primaryDark};
`;

export const FooterInner = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space.xl};
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.space['2xl']} ${theme.space.md}`};

  ${({ theme }) => theme.media.md} {
    grid-template-columns: minmax(0, 1.5fr) repeat(auto-fit, minmax(10rem, 1fr));
  }
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.sm};
`;

export const IntroTitle = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const IntroText = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: rgba(255, 255, 255, 0.8);
`;

export const Column = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.sm};
`;

export const ColumnTitle = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

export const ColumnList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xs};
  margin: 0;
  padding: 0;
  list-style: none;
`;

/** Shared link appearance for both internal routes and external URLs. */
const footerLink = css`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: rgba(255, 255, 255, 0.85);

  &:hover {
    color: ${({ theme }) => theme.colors.textInverse};
    text-decoration: underline;
  }
`;

export const InternalLink = styled(Link)`
  ${footerLink};
`;

export const ExternalLink = styled.a`
  ${footerLink};
`;

export const BottomBar = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

export const BottomInner = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.md}`};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: rgba(255, 255, 255, 0.7);
`;
