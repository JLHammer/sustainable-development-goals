import { HeaderRoot } from './Header.styled';
import type { HeaderProps } from './Header.types';

const Header = (props: HeaderProps) => {
  return <HeaderRoot {...props} />;
};

export default Header;
