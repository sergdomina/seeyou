import { useState } from 'react';
import {
  FooterStyle,
  PolicyBox,
  PolicyItem,
  PolicyLink,
  Policylist,
  FooterContainer,
  FooterDeskr,
  FooterList,
  FooterLogo,
  FooterItem,
  FooterDownload,
  Footerbox,
  FooterLinkBox,
} from './Footer.styled';
import ModalForMail from '../ModalForMail';
import MediaQuery from '../MediaQuery';
import Container from '../Container';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);
  return (
    <FooterStyle>
      <FooterContainer>
        <Footerbox>
          <FooterLogo />
          <FooterDeskr>
            © SEEYOU PLC <br /> The CHQ Building, Custom House Quay,
            <br /> Dublin 1, D01 Y6H7 Ireland
          </FooterDeskr>
        </Footerbox>
        <FooterList>
          <FooterLinkBox>
            <FooterItem>FAQ</FooterItem>
            <MediaQuery device={'desktop'}>
              <FooterDownload type="button" onClick={toggleModal}>
                Download
              </FooterDownload>
            </MediaQuery>
          </FooterLinkBox>
        </FooterList>
      </FooterContainer>
      <PolicyBox>
        <Container>
          <Policylist>
            <PolicyItem>
              <PolicyLink to="/terms">Terms & Conditions</PolicyLink>
            </PolicyItem>
            <PolicyItem>
              <PolicyLink to="/privacy">Privacy Policy</PolicyLink>
            </PolicyItem>
            <PolicyItem>
              <PolicyLink to="/privacy">
                Co-ownership & Rewards Policy
              </PolicyLink>
            </PolicyItem>
          </Policylist>
        </Container>
      </PolicyBox>
      {showModal && <ModalForMail toggleModal={toggleModal} />}
    </FooterStyle>
  );
};
export default Footer;
