import {
  ConferenceTitle,
  ConferenceDiscription,
  SectionTitle,
  SectionTitleSub,
  ConferenceItem,
  ConferenceDiscriptionSub,
  AboutUl,
} from './AboutHero.styled';
import GlobalSection from '../Section';
import Container from '../Container';
import GlobalImage from '../GlobalImage';
import GlobalBox from '../GlobalBox';
import { Image } from '@chakra-ui/react';
import Founders from 'image/about/founders.png';
import CoFounders from 'image/about/Co-founders.png';
import Share from 'image/about/Share.png';
import Ukraine from 'image/about/Ukraine_seemoji.png';

const AboutHero = () => {
  return (
    <GlobalSection>
      <Container>
          <SectionTitle>HISTORY and COMMUNITY</SectionTitle>
          <SectionTitleSub>we are a force for good</SectionTitleSub>
        <AboutUl>
          <ConferenceItem>
             
            <GlobalBox>
              <ConferenceTitle>Founders</ConferenceTitle>

              <ConferenceDiscription>
              SEEYOU was first envisioned in September 2020 by Bjorn Selleg as a double bottom line social impact project. Soon after, Dr. Lise Flovik and Dr. Jolien Vleeshouwers came onboard as the two other founders
              </ConferenceDiscription>
              <ConferenceDiscription>
              Helped by input from our over 100 pax strong handpicked shareholder community, the three used ten months to scope out the first-ever video conference aggregator and end-to-end encrypted communication platform
              </ConferenceDiscription>
            </GlobalBox>
            <Image src={Founders} htmlWidth="570px" alt="Founders" />

          </ConferenceItem>
          <ConferenceItem>
            <GlobalBox>
              <ConferenceTitle>Co-Founders and Team</ConferenceTitle>
              <ConferenceDiscription>
              In the summer and fall of 2021, Sunder Kimatrai, Twana Daniel, and Helen Domina joined as co-founders. In the spring of 2022, Per Kristian Spone completed the management group as CFO and Head of Risk Control
              </ConferenceDiscription>
              <ConferenceDiscription>
              By now, SEEYOU has grown to a 30 pax tribe of 13 nationalities. All committed to being a force for good and providing a free global aggregator and communication platform in 48 languages, with two more to come
              </ConferenceDiscription>
            </GlobalBox>
            <Image src={CoFounders} htmlWidth="521px" alt="selfie in seeyou" />
          </ConferenceItem>
          <ConferenceItem>
            <GlobalBox>
              <ConferenceTitle>Shareholders and Community</ConferenceTitle>
              <ConferenceDiscription>
              Our shareholder community includes another five PhD's and four more psychologists, over ten successful entrepreneurs, a group of former and current CEOs, legal, IT, communication, and industry professionals, and the SEEYOU team. We are funded by long-term private capital only, all approaching this as a double bottom line social impact investment
              </ConferenceDiscription>
              <ConferenceDiscription>
              SEEYOU will be partly user-owned. An equivalent of 10% of the original 2.5 million shares will be gifted to active* users and recruiters during the first 25 months after Open Release on August 1st, 2022
              </ConferenceDiscription>
              <ConferenceDiscriptionSub>
              (*Final terms to be announced)
              </ConferenceDiscriptionSub>
            </GlobalBox>
            <Image src={Share} htmlWidth="521px" alt="selfie in seeyou" />
          </ConferenceItem>
          <ConferenceItem>
            <GlobalBox>
              <ConferenceTitle>Locations</ConferenceTitle>
              <ConferenceDiscription>
              Final approval as an Irish PLC is under completion. SEEYOU is headquartered in Dublin, with subsidiaries in Dubai and Kyiv [temporarily all of the Ukrainian team and their families are safely evacuated to Ireland], and representation in Oslo and Sydney
              </ConferenceDiscription>
            </GlobalBox>
            <Image src={Ukraine} htmlWidth="521px" alt="selfie in seeyou" />
          </ConferenceItem>
        </AboutUl>
      </Container>
    </GlobalSection>
  );
};
export default AboutHero;
