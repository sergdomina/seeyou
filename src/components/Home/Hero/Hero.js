import {
  HeroSection,
  HeroTitle,
  HeroDiscription,
  HeroContainer,
  HeroBox,
  HeroLink,
  HeroThumb,
  HeroImg,
} from './Hero.styled';
import MediaQuery from '../../MediaQuery';
import HeroIllustration from 'image/hero/hero_illustration.png';

const Hero = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <HeroThumb>
          <HeroImg src={HeroIllustration} alt="hero illustration" />
        </HeroThumb>
        <HeroBox>
          <HeroTitle>
            The Video Conference
            <br />
            Aggregator
          </HeroTitle>
          <HeroDiscription>
            SEEYOU is the first-ever aggregator seamlessly integrating with all
            major video conference- and educational learning platforms. It is
            also wholly free of charge. It’ll cost you nothing but will simplify
            life and enable truly cool stuff you never knew you were missing
          </HeroDiscription>
        </HeroBox>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
