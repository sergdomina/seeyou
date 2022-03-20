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
const defaultDescr =
  'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ';

const HeroDownload = () => {
  console.log(platform);
  const userOS = platform.os.family;
  const title = `SEEYOU for ${userOS}`;
  const device = `Download SEEYOU for your ${platform.product} device`;
  return (
    <HeroSection>
      <HeroContainer>
        <HeroThumb />
        <HeroBox>
          <HeroTitle> {userOS ? title : defaultTitle}</HeroTitle>
          <HeroDiscription>{device ? device : defaultDescr}</HeroDiscription>
          <MediaQuery device={'desktop'}>
            <HeroLink to="/download">Download for Free</HeroLink>
          </MediaQuery>
        </HeroBox>
      </HeroContainer>
    </HeroSection>
  );
};
export default HeroDownload;
