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
import ModalForMail from '../ModalForMail';
import DownloadMobileFooter from '../DownloadMobileFooter';
const AppBar = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const toggleMenu = () => {
    setIsOpenMobileMenu(!isOpenMobileMenu);
  };
  const node = useRef();

  useOnClickOutside(node, () => toggleMenu(false), isOpenMobileMenu);

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <Header ref={node}>
      <HeaderContainer>
        <HeaderBox>
          <MediaQuery device={'mobile'}>
            <Burger
              open={isOpenMobileMenu}
              setOpen={toggleMenu}
              aria-expanded={isOpenMobileMenu}
              type="button"
            />
          </MediaQuery>

          <LogoLink onClick={() => setIsOpenMobileMenu(false)} to="/">
            <LogoImg src={LogoSeeYou} alt={'Logo SeeYou'} />
          </LogoLink>
        </HeaderBox>
        <Nav className={isOpenMobileMenu && 'active'}>
          <NavList>
            <NavItem>
              <Link to="/src/pages/Home/Home.js" onClick={toggleMenu}>
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/ownership" onClick={toggleMenu}>
                Co-ownership
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/about" onClick={toggleMenu}>
                About
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/help" onClick={toggleMenu}>
                FAQ
              </Link>
            </NavItem>
          </NavList>
        </Nav>
        <MediaQuery device={'mobile'}>
          <DownloadMobileFooter>
            <DownloadLink type="button" onClick={toggleModal}>
              Download
            </DownloadLink>
          </DownloadMobileFooter>
        </MediaQuery>
        <MediaQuery device={'desktop'}>
          <DownloadLink type="button" onClick={toggleModal}>
            Download
          </DownloadLink>
        </MediaQuery>
      </HeaderContainer>
      {showModal && <ModalForMail toggleModal={toggleModal} />}
    </Header>
  );
};
export default AppBar;
