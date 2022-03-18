import {
  ConferenceTitle,
  ConferenceDiscription,
  SectionTitle,
  ConferenceItem,
} from './Conference.styled';
import GlobalSection from '../Section';
import Container from '../Container';
import GlobalImage from '../GlobalImage';
import GlobalBox from '../GlobalBox';
import LearnMore from '../LearnMore';
const Conference = () => {
  return (
    <GlobalSection>
      <Container>
        <SectionTitle />
        <ul>
          <ConferenceItem>
            <GlobalImage />

            <GlobalBox>
              <ConferenceTitle>
                All conference provider events in one place
              </ConferenceTitle>

              <ConferenceDiscription>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </ConferenceDiscription>
            </GlobalBox>
          </ConferenceItem>
          <ConferenceItem>
            <GlobalImage />
            <GlobalBox>
              <ConferenceTitle>End-to-end encryption</ConferenceTitle>
              <ConferenceDiscription>
                SEEYOU chat is secured with end-to-end encryption so that even
                we cannot read your messages.
              </ConferenceDiscription>
              <LearnMore />
            </GlobalBox>
          </ConferenceItem>
          <ConferenceItem>
            <GlobalImage />
            <GlobalBox>
              <ConferenceTitle>Our Story</ConferenceTitle>
              <ConferenceDiscription>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </ConferenceDiscription>
              <LearnMore />
            </GlobalBox>
          </ConferenceItem>
        </ul>
      </Container>
    </GlobalSection>
  );
};
export default Conference;
