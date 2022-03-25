import {
  HeroSection,
  HeroTitle,
  HeroThumb,
  HeroDiscription,
  HeroContainer,
  HeroBox,
  HeroLink,
  AnotherLink,
  ReleaseList,
  ReleaseItem,
  HeroMobileLink,
  DesctopLink,
  MobileItem,
  MobileList,
  ReleaserLink,
} from './DownloadHero.styled.js';
// import MediaQuery from '../MediaQuery';
import platform from 'platform';
import { isDesktop, isMobile, isAndroid } from 'react-device-detect';
import AndroidIcon from './androidIcon.png';
import IosIcon from './iosicon.png';
import MobileImage from './MobileImage.png';
import DesctopImage from './DesctopImage.png';
import { Img } from '@chakra-ui/react';

const defaultTitle = 'Colaborate anywhere with SeeYou on all your devices';
const defaultDescr =
  'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ';
//Androin//Windows
const DownloadHero = () => {
  const userOS = platform.os.family;
  const title = `SEEYOU for ${userOS}`;
  const device = platform?.product;
  const descr = `Download SEEYOU for your ${device} device`;
  console.log(userOS);

  const mobile = isAndroid && !isDesktop;
  return (
    <HeroSection>
      <HeroContainer>
        <HeroThumb />
        <HeroBox>
          <HeroTitle> {userOS ? title : defaultTitle}</HeroTitle>
          <HeroDiscription>{device ? descr : defaultDescr}</HeroDiscription>

          {isDesktop && <HeroLink>Download</HeroLink>}

          {isMobile && (
            <HeroMobileLink>
              {mobile && (
                <img src={isAndroid ? AndroidIcon : IosIcon} alt={userOS} />
              )}
            </HeroMobileLink>
          )}

          <ReleaseList>
            <ReleaseItem>
              <AnotherLink href="#">I am using another device</AnotherLink>
            </ReleaseItem>

            <ReleaseItem>
              <ReleaserLink to="/release">Release Notes</ReleaserLink>
            </ReleaseItem>
          </ReleaseList>
        </HeroBox>
      </HeroContainer>
      <HeroContainer>
        <Img src={isMobile ? MobileImage : DesctopImage} alt="DownloadImage" />
        <HeroBox>
          <HeroTitle>Stay in sync from anywhere</HeroTitle>
          <HeroDiscription>
            Download SEEYOU for your {isMobile ? 'mobile' : 'desctop'} device
          </HeroDiscription>
          {isMobile && (
            <MobileList>
              <MobileItem>
                <HeroMobileLink>
                  {mobile && <img src={IosIcon} alt={userOS} />}
                </HeroMobileLink>
              </MobileItem>

              <MobileItem>
                <HeroMobileLink>
                  {mobile && <img src={AndroidIcon} alt={userOS} />}
                </HeroMobileLink>
              </MobileItem>
            </MobileList>
          )}
          {isDesktop && (
            <MobileList>
              <MobileItem>
                <DesctopLink>Mac</DesctopLink>
              </MobileItem>

              <MobileItem>
                <DesctopLink>Windows</DesctopLink>
              </MobileItem>
              <MobileItem>
                <DesctopLink>Linux</DesctopLink>
              </MobileItem>
            </MobileList>
          )}
        </HeroBox>
      </HeroContainer>
    </HeroSection>
  );
};
export default DownloadHero;
