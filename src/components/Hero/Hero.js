import {
  HeroSection,
  HeroTitle,
  HeroThumb,
  HeroDiscription,
  HeroContainer,
  HeroBox,
  HeroLink,
} from './Hero.styled';
import MediaQuery from '../MediaQuery';

const Hero = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <HeroThumb />
        <HeroBox>
          <HeroTitle>
            Equitable
            <br />
            Communication
          </HeroTitle>
          <HeroDiscription>
            SEEYOU helps to streamline the conferencing communication and gives
            it’s users the opportunity to co-own for usage and sharing
          </HeroDiscription>
          <MediaQuery device={'desktop'}>
            <HeroLink to="/download">Download for Free</HeroLink>
          </MediaQuery>
        </HeroBox>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
