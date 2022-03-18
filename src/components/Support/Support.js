import {
  SupportTitle,
  SupportDiscription,
  SupportSection,
  SupportContainer,
} from './Support.styled';

import Container from '../Container';

const Support = () => {
  return (
    <SupportSection>
      <Container>
        <SupportContainer>
          <SupportTitle>Support Ukraine Banner</SupportTitle>
          <SupportDiscription>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </SupportDiscription>
        </SupportContainer>
      </Container>
    </SupportSection>
  );
};
export default Support;
