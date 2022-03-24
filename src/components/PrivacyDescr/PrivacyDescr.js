import {
  SectionTitle,
  PrivacySection,
  Discription,
  DiscriptionList,
  DiscriptionItem,
  LinkToList,
  DiscriptionSubtitle,
} from './PrivacyDescr.styled';

import Container from '../Container';

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
          values that are incorporated into all aspects of SEEYOU. We appreciate
          that you have trusted SEEYOU with your information. Your trust is
          important for SEEYOU. SEEYOU enables you to connect, collaborate and
          communicate using a secure channel. SEEYOU is an end-to-end encrypted
          free aggregator streamlining virtual communication.
        </Discription>

        <SectionTitle>What you can expect from SEEYOU</SectionTitle>

        <DiscriptionList>
          <DiscriptionItem>We are a force for good</DiscriptionItem>
          <DiscriptionItem>We measure everything, always</DiscriptionItem>
          <DiscriptionItem>
            Relentless product focus that is information driven
          </DiscriptionItem>
          <DiscriptionItem>Simplicity</DiscriptionItem>
          <DiscriptionItem>Transparency</DiscriptionItem>
          <DiscriptionItem>Stability</DiscriptionItem>
        </DiscriptionList>

        <SectionTitle>What SEEYOU expects from you</SectionTitle>

        <DiscriptionList>
          <DiscriptionItem>
            You are 13 years or older unless you are using SEEYOU through your
            distant learning provider
          </DiscriptionItem>
          <DiscriptionItem>
            WThe age restrictions are higher in same areas – for full info see
            the age restriction list <LinkToList>(Link to list)</LinkToList>
          </DiscriptionItem>
          <DiscriptionItem>Show respect for other participants</DiscriptionItem>
          <DiscriptionItem>Participate in a positive manner</DiscriptionItem>
          <DiscriptionItem>
            Attempt collaboration before conflict
          </DiscriptionItem>
          <DiscriptionItem>
            Boost your communication by using SEEYOU frequently
          </DiscriptionItem>
          <DiscriptionItem>
            Provide as with your regular feedback on your SEEYOU experience to
            facility improvements
          </DiscriptionItem>
        </DiscriptionList>

        <SectionTitle>Be Aware of</SectionTitle>

        <Discription>
          SSEEYOU provide a powerful set of tools to enhance your communication
          in real time. Our free personal conference library enables you to
          store all the conferences that you have participated in including your
          time-stamped notes. Thus, creating a powerful tool for further
          communication. Sharing of conference videos raise issues related to
          Data Protection and more specifically breach of the individual
          participants consent. SEEYOU encourage the user not to share videos
          from conferences recorded via SEEYOU without consent from the other
          participants due to potential breach of Data Protection rules.
        </Discription>

        <DiscriptionSubtitle>
          This Privacy Policy is divided into the following sections:
        </DiscriptionSubtitle>

        <DiscriptionList>
          <DiscriptionItem>Information SEEYOU collects</DiscriptionItem>
          <DiscriptionItem>Why SEEYOU collect the information</DiscriptionItem>
          <DiscriptionItem>How SEEYOU protect the information</DiscriptionItem>
          <DiscriptionItem>How SEEYOU share the information</DiscriptionItem>
          <DiscriptionItem>
            How you can update, manage, export and delete the information
          </DiscriptionItem>
          <DiscriptionItem>
            Compliance and cooperation with regulators
          </DiscriptionItem>
          <DiscriptionItem>About this policy</DiscriptionItem>
        </DiscriptionList>

        <DiscriptionSubtitle>
          SEEYOU Privacy Policy is effective as of April 1st 2022.{' '}
        </DiscriptionSubtitle>
      </Container>
    </PrivacySection>
  );
};
export default PrivacyDescr;
