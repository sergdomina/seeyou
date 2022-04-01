import {
  SupportTitle,
  SupportDiscription,
  Play,
  SupportSection,
  SupportContainer,
} from './Support.styled';
import PlayImg from './play.png'
import Container from '../Container';

const Support = () => {
  return (
    <SupportSection>
      <Container>
        <SupportContainer>
          <SupportTitle>Release Date and Performance Tracking</SupportTitle>
          <SupportDiscription>
          SEEYOU pre-launch version 1.0.1 will be available for download in the App Store and Google Play in the first week of May 2022.
          </SupportDiscription>
          <SupportDiscription>
          From Open Release on August 1st, Monthly Active Users and Daily Active Users are published live in the app. Further performance guidance will not be given.
          </SupportDiscription>
          <Play src={PlayImg}/>
        </SupportContainer>
      </Container>
    </SupportSection>
  );
};
export default Support;
