import {
  HeroSection,
  HeroTitle,
  HeroThumb,
  HeroDiscription,
  HeroContainer,
  HeroBox,
  HeroLink,
} from './HeroDownload.styled.js';
import MediaQuery from '../MediaQuery';
import platform from 'platform';

const defaultTitle = 'Colaborate anywhere with SeeYou on all your devices';

const HeroDownload = () => {
  console.log(platform);
  const userOS = platform.os.family;
  const title = `SEEYOU for ${userOS}`;
  return (
    <HeroSection>
      <HeroContainer>
        <HeroThumb />
        <HeroBox>
          <HeroTitle> {userOS ? title : defaultTitle}</HeroTitle>
          <HeroDiscription>
            Download SEEYOU for your {platform.product} device
          </HeroDiscription>
          <MediaQuery device={'desktop'}>
            <HeroLink to="/download">Download for Free</HeroLink>
          </MediaQuery>
        </HeroBox>
      </HeroContainer>
    </HeroSection>
  );
};
export default HeroDownload;
