import {
  Section,
  HiddenTitle,
  SubTitle,
  Discription,
  DiscriptionWithMargin,
  ConferenceItem,
  DiscriptionList,
  BoxBeforEnd,
  DiscriptionSub,
  BrandsLogos,
  LLC,
} from './Conference.styled';

import { Image } from '@chakra-ui/react';

import Container from '../../Container';
import GlobalBox from '../../GlobalBox';
import GlobalImage from '../../GlobalImage';
import SelfieImg from 'image/conference/selfieLoopTm.png';
import StickyImg from 'image/conference/stickyNote.png';
import Library from 'image/conference/free.png';
import Rewind from 'image/conference/real.png';
import Calls from 'image/conference/Truly.png';
import HomeScreen from 'image/conference/oneStop.png';
import BrandsLogo from 'image/conference/brandsLogo.png';
import BrandsLogoMobile from 'image/conference/BrandsLogoMobile.png';
import coOwnership from 'image/conference/freeCoowner.png';
import MediaQuery from '../../MediaQuery';
const Conference = () => {
  return (
    <Section>
      <Container>
        <HiddenTitle>Conference </HiddenTitle>
        <ul>
          <ConferenceItem>
            <GlobalImage>
            <Image src={SelfieImg} alt="selfie in seeyou" />
            </GlobalImage>
            <GlobalBox>
              <SubTitle>Selfie Loop ™</SubTitle>

              <Discription>
                SEEYOU provides a real-time virtual camera Selfie Loop™.
                Substituting your camera feed with a selfie video when getting a
                coffee, making a call, or stepping away for a second
              </Discription>
            </GlobalBox>
          </ConferenceItem>
          <ConferenceItem>
            <GlobalImage>
            <Image src={StickyImg}  alt="selfie in seeyou" />
            </GlobalImage>
            <GlobalBox>
              <SubTitle>Linked Notes</SubTitle>
              <DiscriptionWithMargin>
                On Mac and Windows, SEEYOU provides fully encrypted hyperlinked
                sticky notes. Clicking on the link will automatically open the
                conference where you made the note if you have stored the
                conference in your private library
              </DiscriptionWithMargin>
              <Discription>
                Recording and storage are only possible on desktop devices. On
                Android and iPhone, the sticky notes are instead time-stamped to
                the conference timeline
              </Discription>
            </GlobalBox>
          </ConferenceItem>
          <ConferenceItem>
            <GlobalImage>
              <Image src={Library}  alt="Library" />
            </GlobalImage>
            <GlobalBox>
              <SubTitle>
                Free Conference <br /> Recordings Library
              </SubTitle>
              <Discription>
                SEEYOU allows you to store your recordings. These are kept in
                your private YouTube Studio® library.
                <br /> The sticky notes are hyperlinked to the recordings.
                Clicking on the link will automatically open the conference
                where you made the note
              </Discription>
            </GlobalBox>
          </ConferenceItem>
          <ConferenceItem>
          <GlobalImage>
            <Image src={Rewind}  alt="Rewind" />
            </GlobalImage>
            <GlobalBox>
              <SubTitle>Real-Time Rewind</SubTitle>
              <Discription>
                On Mac and Windows, SEEYOU enables real-time-rewind, allowing
                you to go back and check past parts while still following the
                live conference
              </Discription>
            </GlobalBox>
          </ConferenceItem>
          <ConferenceItem>
          <GlobalImage>
            <Image src={Calls}  alt="Calls" />
            </GlobalImage>
            <GlobalBox>
              <SubTitle>
                Truly Private <br /> Communication
              </SubTitle>
              <DiscriptionWithMargin>
                SEEYOU's chat, video and voice calls are end-to-end encrypted,
                meaning they’re genuinely private. SEEYOU cannot read the
                content nor see with whom you are communicating. Nor can anyone
                else. Unlike many other providers, this holds for group chats
                too.
              </DiscriptionWithMargin>
              <Discription>
                The encryption key is personal and managed by your mobile phone,
                and logs are not centrally stored by SEEYOU but are yours alone.
                The chat, video, and voice calls work equally well outside video
                conferences
              </Discription>
            </GlobalBox>
          </ConferenceItem>
          <ConferenceItem>
            <GlobalImage>
              <Image src={HomeScreen}  alt="HomeScreen" />
            </GlobalImage>
            <div>
              <BoxBeforEnd>
                <SubTitle>One-Stop-Shop Homepage</SubTitle>

                <DiscriptionList>
                  <li>
                    <Discription>With your unread messages</Discription>
                  </li>
                  <li>
                    <Discription>
                      All your virtual meetings in one place
                    </Discription>
                  </li>
                  <li>
                    <Discription>
                      The one-stop-shop for creating conferences
                    </Discription>
                  </li>
                </DiscriptionList>
                <MediaQuery device={'mobile'}>
                  <Image src={BrandsLogoMobile} alt="BrandsLogo" />
                </MediaQuery>
                <MediaQuery device={'tablet'}>
                  <BrandsLogos src={BrandsLogo} alt="BrandsLogo" />
                </MediaQuery>
                <MediaQuery device={'default'}>
                  <BrandsLogos src={BrandsLogo} alt="BrandsLogo" />
                </MediaQuery>
                
              </BoxBeforEnd>
              
            </div>
          </ConferenceItem>
          <ConferenceItem>
            <GlobalImage>
              <Image src={coOwnership} alt="coOwnership"/>
            </GlobalImage>
            <GlobalBox>
              <SubTitle>
                Free Co-Ownership
                <br /> Program
              </SubTitle>
              <DiscriptionWithMargin>
                SEEYOU will be partly user-owned. An equivalent of 10% of the
                original 2.5 million shares will be gifted to active* users and
                recruiters during the first 25 months after Open Release on
                August 1st, 2022
              </DiscriptionWithMargin>
              <DiscriptionSub>(*Terms to be announced)</DiscriptionSub>
            </GlobalBox>
          </ConferenceItem>
          <ConferenceItem>
              <LLC>SEEYOU LLC, The CHQ Building, Custom House Quay, Dublin 1, D01 Y6H7 Ireland</LLC>
          </ConferenceItem>
        </ul>
      </Container>
    </Section>
  );
};
export default Conference;
