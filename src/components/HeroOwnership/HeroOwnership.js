import {
  HeroSection,
  HeroTitle,
  HeroThumb,
  HeroDiscription,
  HeroContainer,
  HeroBox,
  HeroLink,
} from './HeroOwnership.styled';
import MediaQuery from '../MediaQuery';

const HeroOwnership = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <HeroThumb />
        <HeroBox>
          <HeroTitle>
            Use and share <br /> SEEYOU and get <br /> equity tokens
          </HeroTitle>
          <HeroDiscription>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </HeroDiscription>
          <MediaQuery device={'desktop'}>
            <HeroLink>Download for Free</HeroLink>
          </MediaQuery>
        </HeroBox>
      </HeroContainer>
    </HeroSection>
  );
};

export default HeroOwnership;
