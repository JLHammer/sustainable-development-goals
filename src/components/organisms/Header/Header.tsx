import { useId, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import {
  Actions,
  Brand,
  BrandLogo,
  HeaderInner,
  HeaderRoot,
  MenuToggle,
  NavSlot,
} from './Header.styled';
import type { HeaderProps } from './Header.types';

const Header = ({
  navItems,
  brandName = 'Sustainable Development Goals',
  brandTo = '/',
  logoSrc,
  actions,
  sticky = true,
  ...rest
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navId = useId();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <HeaderRoot $sticky={sticky} {...rest}>
      <HeaderInner>
        <Brand to={brandTo} onClick={closeMenu}>
          {logoSrc && <BrandLogo src={logoSrc} alt="" />}
          {brandName}
        </Brand>

        <Actions>
          {actions}
          <MenuToggle
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls={navId}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </MenuToggle>
        </Actions>

        <NavSlot>
          <NavBar id={navId} items={navItems} isOpen={isMenuOpen} onNavigate={closeMenu} />
        </NavSlot>
      </HeaderInner>
    </HeaderRoot>
  );
};

export default Header;
