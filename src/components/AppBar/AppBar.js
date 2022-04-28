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
  // DownHeadDiv,
} from './AppBar.styled';
// import { Container } from '../Container/Container.styled';
import Burger from '../Burger';
import LogoSeeYou from '../../image/seeyou_15_04.svg';
import { useOnClickOutside } from '../../hooks/OnClickOutside';
import MediaQuery from '../MediaQuery';
import DownloadLink from '../DownloadLink';
import ModalForMail from '../ModalForMail';
import PopupHeader from '../PopupHeader';
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

  // const [likeList, setLikeList] = useState('');

  // const renderLikeList = () => {
  //   return (
  //     <LikesList>
  //       <Link to="/terms" onClick={toggleMenu}>
  //         Terms of service
  //       </Link>
  //       <Link to="/privacy" onClick={toggleMenu}>
  //         Privacy Policy
  //       </Link>
  //     </LikesList>
  //   );
  // };

  // const handleLeave = () => {
  //   return setLikeList('');
  // };
  // const handleHover = () => {
  //   // return setLikeList(renderLikeList());
  //   return setLikeList('true');
  //   // return this.setState({ likeList: this.renderLikeList() });
  // };

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
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </NavItem>

            <NavItem>
              <Link to="/about" onClick={toggleMenu}>
                About
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/co-ownership" onClick={toggleMenu}>
                Co-Ownership
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/faq" onClick={toggleMenu}>
                FAQ
              </Link>
            </NavItem>
            <NavItem>
              <PopupHeader />
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
        {/* <DownHeadDiv> */}
        <MediaQuery device={'default'}>
          <DownloadLink href='mailto:hello@seeyou.eu?subject=Please add me to the SEEYOU pre-launch version 1.0.1 priority list" target="_self"'>
            Download
          </DownloadLink>
        </MediaQuery>
        {/* </DownHeadDiv> */}
      </HeaderContainer>
      {showModal && <ModalForMail toggleModal={toggleModal} />}
    </Header>
  );
};
export default AppBar;
