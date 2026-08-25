import { Nav, NavItemLink, NavItems } from './NavBar.styled';
import type { NavBarProps } from './NavBar.types';

const NavBar = ({
  items,
  orientation = 'horizontal',
  isOpen = false,
  onNavigate,
  'aria-label': ariaLabel = 'Main',
  ...rest
}: NavBarProps) => {
  return (
    <Nav aria-label={ariaLabel} $orientation={orientation} $isOpen={isOpen} {...rest}>
      <NavItems $orientation={orientation} $isOpen={isOpen}>
        {items.map((item) => (
          <li key={item.to}>
            <NavItemLink
              to={item.to}
              end={item.end}
              onClick={onNavigate}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {item.label}
            </NavItemLink>
          </li>
        ))}
      </NavItems>
    </Nav>
  );
};

export default NavBar;
