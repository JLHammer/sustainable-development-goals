import {
  BottomBar,
  BottomInner,
  Column,
  ColumnList,
  ColumnTitle,
  ExternalLink,
  FooterInner,
  FooterRoot,
  InternalLink,
  Intro,
  IntroText,
  IntroTitle,
} from './Footer.styled';
import type { FooterProps } from './Footer.types';

const Footer = ({
  columns = [],
  description,
  organisation = 'Sustainable Development Goals',
  year = new Date().getFullYear(),
  ...rest
}: FooterProps) => {
  return (
    <FooterRoot {...rest}>
      <FooterInner>
        <Intro>
          <IntroTitle>{organisation}</IntroTitle>
          {description && <IntroText>{description}</IntroText>}
        </Intro>

        {columns.map((column) => (
          <Column key={column.title} aria-label={column.title}>
            <ColumnTitle>{column.title}</ColumnTitle>
            <ColumnList>
              {column.links.map((link) => (
                <li key={link.label}>
                  {link.href ? (
                    <ExternalLink href={link.href} target="_blank" rel="noreferrer noopener">
                      {link.label}
                    </ExternalLink>
                  ) : (
                    <InternalLink to={link.to ?? '/'}>{link.label}</InternalLink>
                  )}
                </li>
              ))}
            </ColumnList>
          </Column>
        ))}
      </FooterInner>

      <BottomBar>
        <BottomInner>
          &copy; {year} {organisation}. All rights reserved.
        </BottomInner>
      </BottomBar>
    </FooterRoot>
  );
};

export default Footer;
