import {
  HeroSection,
  HeroTitle,
  HeroDiscription,
  HeroContainer,
  HeroBox,
  HeroLink,
  HeroThumb
} from './Hero.styled';
import MediaQuery from '../MediaQuery';
import HeroImg from './hero_illustration.png';

const Hero = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <HeroThumb src={HeroImg}/>
        <HeroBox>
          <HeroTitle>
          The Video Conference<br/>Aggregator
          </HeroTitle>
          <HeroDiscription>
          SEEYOU is the first-ever aggregator seamlessly integrating with all major video conference- and educational learning platforms. It is also wholly free of charge. It’ll cost you nothing but will simplify life and enable truly cool stuff you never knew you were missing
          </HeroDiscription>
          <MediaQuery device={'desktop'}>
            <HeroLink>Learn More</HeroLink>
          </MediaQuery>
        </HeroBox>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
