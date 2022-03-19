import { useState, useRef } from 'react';
import {
  Nav,
  Link,
  Header,
  LogoImg,
  NavItem,
  NavList,
  HeaderBox,
  LogoLink,
  HeaderContainer,
} from './AppBar.styled';
// import { Container } from '../Container/Container.styled';
import Burger from '../Burger';
import LogoSeeYou from '../../image/LogoSeeYou.svg';
import { useOnClickOutside } from '../../hooks/OnClickOutside';
import MediaQuery from '../MediaQuery';
import DownloadLink from '../DownloadLink';

const AppBar = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const ToggleMenu = () => {
    setIsOpenMobileMenu(!isOpenMobileMenu);
  };
  const node = useRef();
  // const menuId = 'main-menu';

  useOnClickOutside(node, () => ToggleMenu(false));
  return (
    <Header ref={node}>
      <HeaderContainer>
        <HeaderBox>
          <MediaQuery device={'mobile'}>
            <Burger
              open={isOpenMobileMenu}
              setOpen={ToggleMenu}
              aria-expanded={isOpenMobileMenu}
              type="button"
            />
          </MediaQuery>

          <LogoLink onClick={() => setIsOpenMobileMenu(false)} to="/">
            <LogoImg src={LogoSeeYou} alt={'Logo SeeYou'} />
          </LogoLink>
        </HeaderBox>
        <Nav className={isOpenMobileMenu && 'active'}>
          <NavList className={isOpenMobileMenu && 'active'}>
            <NavItem>
              <Link to="/products" onClick={ToggleMenu}>
                Products
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/ownership" onClick={ToggleMenu}>
                Co-ownership
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/about" onClick={ToggleMenu}>
                About
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/help" onClick={ToggleMenu}>
                Help
              </Link>
            </NavItem>
          </NavList>
        </Nav>
        <MediaQuery device={'desktop'}>
          <DownloadLink>Download</DownloadLink>
        </MediaQuery>
      </HeaderContainer>
    </Header>
  );
};
export default AppBar;
