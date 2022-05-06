import {
  FAQSection,
  SectionTitle,
  SectionTitleSub,
  FAQul,
  FAQli,
  Questions,
  Answer,
  PartnersDiv,
  PartnersUl,
  PartnersLi,
  ContainerFAQ,
} from './FAQ.styled';

import GoogleMeet from '../../image/FAQ/googlemeet.png';
import Microsoft from '../../image/FAQ/microsoft.png';
import Webex from '../../image/FAQ/webex.png';
import Zoom from '../../image/FAQ/zoom.png';
import Avaya from '../../image/FAQ/avaya.png';
import Bluejeans from '../../image/FAQ/bluejeans.png';
import Huawei from '../../image/FAQ/huawei.png';
import StarLeaf from '../../image/FAQ/starleaf.png';
import LogMe from '../../image/FAQ/logme.png';
import LifeSize from '../../image/FAQ/lifesize.png';

import { Image } from '@chakra-ui/react';

const FAQ = () => {
  return (
    <FAQSection>
      <ContainerFAQ>
        <SectionTitle>FAQ</SectionTitle>
        <SectionTitleSub>
          These are some of the most common questions we get
        </SectionTitleSub>
        <div>
          <FAQul>
            <FAQli>
              <Questions>Is SEEYOU entirely free?</Questions>
              <Answer>Yes, there are no in-app purchases</Answer>
            </FAQli>
            <FAQli>
              <Questions>How does SEEYOU make money?</Questions>
              <Answer>We run ads</Answer>
            </FAQli>
            <FAQli>
              <Questions>
                Which video conference providers work with SEEYOU?
              </Questions>
              <Answer>All these major ones and more are coming</Answer>
              <PartnersDiv>
                <PartnersUl>
                  <PartnersLi>
                    <Image
                      src={GoogleMeet}
                      htmlWidth="105px"
                      alt="GoogleMeet"
                    />
                  </PartnersLi>
                  <PartnersLi>
                    <Image src={Microsoft} htmlWidth="106px" alt="Microsoft" />
                  </PartnersLi>
                  <PartnersLi>
                    <Image src={Webex} htmlWidth="87px" alt="Webex" />
                  </PartnersLi>
                  <PartnersLi>
                    <Image src={Zoom} htmlWidth="79px" alt="Zoom" />
                  </PartnersLi>
                </PartnersUl>
                <PartnersUl>
                  <PartnersLi>
                    <Image src={Avaya} htmlWidth="62px" alt="Avaya" />
                  </PartnersLi>
                  <PartnersLi>
                    <Image src={Bluejeans} htmlWidth="78px" alt="BlueJeans" />
                  </PartnersLi>
                  <PartnersLi>
                    <Image src={Huawei} htmlWidth="93px" alt="Huawei" />
                  </PartnersLi>
                  <PartnersLi>
                    <Image src={StarLeaf} htmlWidth="84px" alt="StarLeaf" />
                  </PartnersLi>
                  <PartnersLi>
                    <Image src={LogMe} htmlWidth="73px" alt="LogMe" />
                  </PartnersLi>
                  <PartnersLi>
                    <Image src={LifeSize} htmlWidth="87px" alt="LifeSize" />
                  </PartnersLi>
                </PartnersUl>
              </PartnersDiv>
            </FAQli>
            <FAQli>
              <Questions>Is storing conferences free?</Questions>
              <Answer>Yes</Answer>
            </FAQli>
            <FAQli>
              <Questions>Is storing conferences safe?</Questions>
              <Answer>
                Your conferences are stored on your personal Youtube Studios
                account, ensuring you benefit from all the safety features built
                into YouTube
              </Answer>
            </FAQli>
            <FAQli>
              <Questions>Is recording and storing conferences legal?</Questions>
              <Answer>
                SEEYOU is EU-based. According to GDPR, you may only record and
                store conferences for personal use. Please consult your
                applicable laws and regulations if recording and storing
                conferences outside of the EU/EEA
              </Answer>
            </FAQli>
            <FAQli>
              <Questions>
                Can I record when using SEEYOU on my mobile phone?
              </Questions>
              <Answer>
                No, limitations to the operating systems on iOS and Android
                prevents recordings on mobile phones. So, for now, this is a
                desktop feature only
              </Answer>
            </FAQli>
            <FAQli>
              <Questions>
                Does the Selfie Loop™ work on my mobile phone?
              </Questions>
              <Answer>
                No, the same problem as with recordings. So, for now, this is a
                desktop feature only
              </Answer>
            </FAQli>
            <FAQli>
              <Questions>
                How does the hyper-link on the sticky notes work?
              </Questions>
              <Answer>
                Simple, if you open SEEYOU and click on any note taken during a
                conference you have stored, the conference opens where you
                started taking the note. Kind of cool when preparing for an
                exam, a meeting, or whatever
              </Answer>
            </FAQli>
            <FAQli>
              <Questions>Can I make notes on my phone?</Questions>
              <Answer>Absolutely</Answer>
            </FAQli>
            <FAQli>
              <Questions>Are the notes encrypted?</Questions>
              <Answer>Yes, they are</Answer>
            </FAQli>
            <FAQli>
              <Questions>
                Are the chat and video messages end-to-end encrypted?
              </Questions>
              <Answer>
                Yes, they are. SEEYOU's chat, video, and voice calls are
                end-to-end encrypted, meaning they're genuinely private. SEEYOU
                cannot read the content nor see with whom you are communicating.
                Nor can anyone else
              </Answer>
              <Answer>
                Unlike many other providers, this holds for group chats too. The
                encryption key is personal and managed by your mobile phone, and
                logs are not centrally stored by SEEYOU but are yours alone
              </Answer>
            </FAQli>
            <FAQli>
              <Questions>
                Can I use SEEYOU's encrypted communication outside of video
                conferences?
              </Questions>
              <Answer>Yes, you both can and should</Answer>
            </FAQli>
            <FAQli>
              <Questions>
                Why must I download SEEYOU both on desktop and mobile?
              </Questions>
              <Answer>
                Because your mobile phone store your personal end-to-end
                encryption key, making your communication truly private
              </Answer>
            </FAQli>
            <FAQli>
              <Questions>How do I download SEEYOU?</Questions>
              <Answer>
                On the desktop, you download it either from www.seeyou.eu or
                from a link you either receive from a friend or copy from social
                media. On mobile, you download SEEYOU from the App Store or
                Google Play
              </Answer>
            </FAQli>
            <FAQli>
              <Questions>How do I download SEEYOU?</Questions>
              <Answer>
                On the desktop, you download it either from www.seeyou.eu or
                from a link you either receive from a friend or copy from social
                media. On mobile, you download SEEYOU from the App Store or
                Google Play
              </Answer>
            </FAQli>
            <FAQli>
              <Questions>When will SEEYOU be available?</Questions>
              <Answer>
                SEEYOU will be available for limited release in version 1.0.1 in
                the first week of May 2022. Open release, including SEEYOU for
                Chromebook and Linux, is on August 1st, 2022
              </Answer>
            </FAQli>
            <FAQli>
              <Questions>
                Are you really giving away for free an equivalent of 10% of the
                original 2.5 million shares to the users?
              </Questions>
              <Answer>
                Yes, we are, we want to create a truly equitable global
                community. And giving back part of the company to our users
                seems the right thing to do, so that is what we are doing
              </Answer>
            </FAQli>
            <FAQli>
              <Questions>Why are the shares given as equity tokens?</Questions>
              <Answer>
                Equity tokens are an easy way for users to earn fractional
                shares, and they allow users to move their holdings from SEEYOU
                to their own private cryptocurrency wallets in the form of
                ECR-20 based SEUs
              </Answer>
            </FAQli>
            <FAQli>
              <Questions>
                When will the SEUs and common shares be listed?
              </Questions>
              <Answer>
                Both are planned listed on reputable exchanges in the fall of
                2022
              </Answer>
            </FAQli>
            <FAQli>
              <Questions>
                Are equity tokens interchangeable with shares?
              </Questions>
              <Answer>Yes, 100 equity tokens equal one share</Answer>
            </FAQli>
            <FAQli>
              <Questions>Is SEEYOU looking for more people?</Questions>
              <Answer>
                Yes, we are. If you find that your values align with ours and
                you love what you do, we may be the place for you
              </Answer>
            </FAQli>
            <FAQli>
              <Questions>What are SEEYOU's strategy and values?</Questions>
              <Answer>
                Below is the strategy and value statement governing pretty much
                everything we do
              </Answer>
            </FAQli>
          </FAQul>
        </div>
      </ContainerFAQ>
    </FAQSection>
  );
};
export default FAQ;
