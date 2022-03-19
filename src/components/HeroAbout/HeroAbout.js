import {
  ConferenceTitle,
  ConferenceDiscription,
  SectionTitle,
  ConferenceItem,
} from './HeroAbout.styled';
import GlobalSection from '../Section';
import Container from '../Container';
import GlobalImage from '../GlobalImage';
import GlobalBox from '../GlobalBox';

const Conference = () => {
  return (
    <GlobalSection>
      <Container>
        <SectionTitle>About us</SectionTitle>
        <ul>
          <ConferenceItem>
            <GlobalImage
              url={
                'https://images.pexels.com/photos/1056103/pexels-photo-1056103.jpeg?cs=srgb&dl=pexels-nigam-machchhar-1056103.jpg&fm=jpg'
              }
            />

            <GlobalBox>
              <ConferenceTitle>SEEYOU story</ConferenceTitle>

              <ConferenceDiscription>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit. Amet
                minim mollit non deserunt ullamco est sit aliqua dolor do amet
                sint. Velit officia consequat duis enim velit mollit.
              </ConferenceDiscription>
            </GlobalBox>
          </ConferenceItem>
          <ConferenceItem>
            <GlobalImage
              url={
                'https://images.pexels.com/photos/6353751/pexels-photo-6353751.jpeg?cs=srgb&dl=pexels-anete-lusina-6353751.jpg&fm=jpg'
              }
            />
            <GlobalBox>
              <ConferenceTitle>Our Values</ConferenceTitle>
              <ConferenceDiscription>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit. Amet
                minim mollit non deserunt ullamco est sit aliqua dolor do amet
                sint. Velit officia consequat duis enim velit mollit.
              </ConferenceDiscription>
            </GlobalBox>
          </ConferenceItem>
        </ul>
      </Container>
    </GlobalSection>
  );
};
export default Conference;
