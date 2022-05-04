import {
  Section,
  Title,
  HeroThumb,
  HeroDiscription,
  DownloadList,
  DownloadItem,
  HeroContainer,
  GlobalBox,
  Link,
  DownloadMobileTitle,
  DownloadMobileDiscription,
  HeroThumbMobile,
  DownloadMobileList,
  DownloadMobileItem,
  DownloadMobileLink,
} from './DownloadHero.styled.js';

import HeroIllustration from 'image/hero/hero.svg';
import DownloadMobiles from 'image/downloads/downloadsMobile.svg';
import DownloadAppStoreBtn from 'image/downloads/downloadAppStoreBtn.svg';
import DownloadPlayMarketBtn from 'image/downloads/downloadPlayMarketBtn.svg';
//Androin//Windows
const DownloadHero = () => {
  return (
    <Section>
      <HeroContainer>
        <HeroThumb>
          <img src={HeroIllustration} alt="hero illustration" />
        </HeroThumb>
        <GlobalBox>
          <Title>SEEYOU for Desktop</Title>
          <HeroDiscription>
            The Selfie Loop, hyper-linked Sticky Notes, saving of recordings in
            your Library, and in-conference rewind are all desktop features.
          </HeroDiscription>
          <DownloadList>
            <DownloadItem>
              <Link href='mailto:hello@seeyou.eu?subject=Please add me to the SEEYOU pre-launch version 1.0.1 priority list" target="_self"'>
                SEEYOU for Mac
              </Link>
            </DownloadItem>
            <DownloadItem>
              <Link href='mailto:hello@seeyou.eu?subject=Please add me to the SEEYOU pre-launch version 1.0.1 priority list" target="_self"'>
                SEEYOU for Windows
              </Link>
            </DownloadItem>
          </DownloadList>
        </GlobalBox>
      </HeroContainer>
      <HeroContainer>
        <HeroThumbMobile>
          <img src={DownloadMobiles} alt="download mobiles" />
        </HeroThumbMobile>
        <GlobalBox>
          <DownloadMobileTitle>SEEYOU for Mobile</DownloadMobileTitle>
          <DownloadMobileDiscription>
            To secure end-to-end encryption and fully privatize your data, your
            mobile must be enabled as the primary device for your SEEYOU
            communication
          </DownloadMobileDiscription>
          <DownloadMobileList>
            <DownloadMobileItem>
              <DownloadMobileLink href='mailto:hello@seeyou.eu?subject=Please add me to the SEEYOU pre-launch version 1.0.1 priority list" target="_self"'>
                <img src={DownloadAppStoreBtn} alt="Download App Store Btn" />
              </DownloadMobileLink>
            </DownloadMobileItem>
            <DownloadMobileItem>
              <DownloadMobileLink href='mailto:hello@seeyou.eu?subject=Please add me to the SEEYOU pre-launch version 1.0.1 priority list" target="_self"'>
                <img
                  src={DownloadPlayMarketBtn}
                  alt="Download Play Market Btn"
                />
              </DownloadMobileLink>
            </DownloadMobileItem>
          </DownloadMobileList>
        </GlobalBox>
      </HeroContainer>
    </Section>
  );
};
export default DownloadHero;
