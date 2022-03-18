import {
  FooterStyle,
  PolicyBox,
  PolicyItem,
  Policylist,
} from './Footer.styled';
import Container from '../Container';
const Footer = () => {
  return (
    <FooterStyle>
      <Container>
        <h2>footer</h2>
      </Container>
      <PolicyBox>
        <Container>
          <Policylist>
            <PolicyItem>Terms & Conditions </PolicyItem>
            <PolicyItem>Privacy Policy</PolicyItem>
            <PolicyItem>Cookies Policy</PolicyItem>
            <PolicyItem>Co-ownership & Rewards Policy</PolicyItem>
          </Policylist>
        </Container>
      </PolicyBox>
    </FooterStyle>
  );
};
export default Footer;
