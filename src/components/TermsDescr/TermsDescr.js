import {
  SectionTitle,
  PrivacySection,
  Discription,
  DiscriptionList,
  CollectsDiscription,
} from './TermsDescr.styled';
import Container from '../Container';
import PartiesToTerms from './PartiesToTerms';
const PrivacyDescr = () => {
  return (
    <PrivacySection>
      <Container>
        <SectionTitle>SEEYOU Privacy Policy</SectionTitle>

        <Discription>
          SEEYOU is a force for good that is dedicated to enhancing user
          experience and streamlining virtual communication. We provide products
          that radically embrace change by seamless integration with most major
          video conferences and distant learning providers. These are ambitious
          values that are incorporated into all aspects of SEEYOU. These Terms
          of Services reflect SEEYOUs business and the laws applicable to our
          business. SEEYOU Terms of services defines the relationship between
          the user and SEEYOU. We have structured the document into the
          following headings:
        </Discription>

        <DiscriptionList>
          <li>
            <CollectsDiscription>
              Parties to terms of services
            </CollectsDiscription>
          </li>
          <li>
            <CollectsDiscription>Services</CollectsDiscription>
          </li>
          <li>
            <CollectsDiscription>License</CollectsDiscription>
          </li>
          <li>
            <CollectsDiscription>Content</CollectsDiscription>
          </li>
          <li>
            <CollectsDiscription>Legal</CollectsDiscription>
          </li>
          <li>
            <CollectsDiscription>
              Effective date and changes to terms of services
            </CollectsDiscription>
          </li>
        </DiscriptionList>
        <PartiesToTerms />
      </Container>
    </PrivacySection>
  );
};
export default PrivacyDescr;
