import { useState } from 'react';
import {
  Nav,
  Link,
  Header,
  LogoImg,
  NavItem,
  NavList,
  HeaderContainer,
  HeaderBox,
} from './AppBar.styled';
import { Container } from '../Container/Container.styled';
import LogoSeeYou from '../../image/LogoSeeYou.svg';
export const AppBar = () => {
  const [isOpenMobileMenu, setisOpenMobileMenu] = useState(false);
  const handleMenu = () => {
    setisOpenMobileMenu(!isOpenMobileMenu);
  };
  return (
    <Header>
      <Container>
        <HeaderContainer>
          <HeaderBox>
            <button
              onClick={handleMenu}
              aria-expanded={isOpenMobileMenu}
              type="button"
            >
              menu
            </button>
            <Link to="/">
              <LogoImg src={LogoSeeYou} alt={'Logo SeeYou'} />
            </Link>
          </HeaderBox>
        </HeaderContainer>
        <Nav className={isOpenMobileMenu && 'active'}>
          <NavList className={isOpenMobileMenu && 'active'}>
            <NavItem>
              <Link to="/products" onClick={handleMenu}>
                Products
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/about" onClick={handleMenu}>
                About
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/ownership" onClick={handleMenu}>
                Co-ownership
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/help" onClick={handleMenu}>
                Help
              </Link>
            </NavItem>
          </NavList>
        </Nav>
      </Container>
    </Header>
  );
};
