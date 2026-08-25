import { Nav } from './NavBar.styled';
import type { NavBarProps } from './NavBar.types';

const NavBar = (props: NavBarProps) => {
  return <Nav {...props} />;
};

export default NavBar;
