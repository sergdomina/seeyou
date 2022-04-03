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
  Footerbox,
  FooterLinkBox,
} from './Footer.styled';
import MediaQuery from '../MediaQuery';
import Container from '../Container';

const Footer = () => {
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
              <FooterItem>Download</FooterItem>
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
    </FooterStyle>
  );
};
export default Footer;
