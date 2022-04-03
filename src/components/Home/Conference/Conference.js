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
} from './Conference.styled';

import { Image } from '@chakra-ui/react';

import Container from '../../Container';
import GlobalBox from '../../GlobalBox';

import SelfieImg from 'image/conference/selfieLoopTm.png';
import StickyImg from 'image/conference/stickyNote.png';
import Library from 'image/conference/library.png';
import Rewind from 'image/conference/rewind.png';
import Calls from 'image/conference/calls.png';
import HomeScreen from 'image/conference/homeScreen.png';
import BrandsLogo from 'image/conference/brandsLogo.png';
import coOwnership from 'image/conference/coOwnership.png';
import LearnMore from '../../LearnMore';
const Conference = () => {
  return (
    <Section>
      <Container>
        <HiddenTitle>Conference </HiddenTitle>
        <ul>
          <ConferenceItem>
            <Image src={SelfieImg} htmlWidth="521px" alt="selfie in seeyou" />

            <GlobalBox>
              <SubTitle>The Selfie Loop ™</SubTitle>

              <Discription>
                SEEYOU provides a real-time virtual camera Selfie Loop,
                substituting your camera feed with a selfie video recording when
                getting a coffee, making a call, or stepping away for a second
              </Discription>
            </GlobalBox>
          </ConferenceItem>
          <ConferenceItem>
            <Image src={StickyImg} htmlWidth="468px" alt="selfie in seeyou" />
            <GlobalBox>
              <SubTitle>Linked Notes</SubTitle>
              <DiscriptionWithMargin>
                On Mac and Windows, SEEYOU provides fully encrypted hyperlinked
                sticky notes. Later, clicking on the link will automatically
                open the conference where you made the note if you have stored
                the conference in your private library.
              </DiscriptionWithMargin>
              <Discription>
                Recording and storage are only possible on desktop devices. On
                Android and iPhone, the sticky notes are instead time-stamped to
                the conference timeline
              </Discription>
            </GlobalBox>
          </ConferenceItem>
          <ConferenceItem>
            <Image src={Library} htmlWidth="521px" alt="Library" />

            <GlobalBox>
              <SubTitle>
                Free Conference <br /> Recordings Library
              </SubTitle>
              <Discription>
                SEEYOU allows you to store your recordings. These are kept in
                your private YouTube Studio® library. The sticky notes are
                hyperlinked to the recordings. Clicking on the link will
                automatically open the conference where you made the note
              </Discription>
            </GlobalBox>
          </ConferenceItem>
          <ConferenceItem>
            <Image src={Rewind} htmlWidth="541px" alt="Rewind" />
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
            <Image src={Calls} htmlWidth="568px" alt="Calls" />
            <GlobalBox>
              <SubTitle>
                The Truly Private <br /> Communication
              </SubTitle>
              <DiscriptionWithMargin>
                SEEYOU's chat, video and voice calls are end-to-end encrypted,
                meaning they’re genuinely private. SEEYOU cannot read the
                content nor see with whom you are communicating. Nor can anyone
                else. Unlike many other providers, this holds for group chats
                too.
              </DiscriptionWithMargin>
              <Discription>
                The chat, video, and voice calls work equally well outside video
                conferences. The encryption key is personal and managed by your
                mobile phone, and logs are not centrally stored by SEEYOU but
                are yours alone.
              </Discription>
            </GlobalBox>
          </ConferenceItem>
          <ConferenceItem>
            <Image src={HomeScreen} htmlWidth="331px" />
            <div>
              <BoxBeforEnd>
                <SubTitle>One-Stop-Shop Homepage</SubTitle>

                <DiscriptionList>
                  <li>
                    <Discription>With your unread message</Discription>
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
              </BoxBeforEnd>
              <Image src={BrandsLogo} htmlWidth="570px" />
            </div>
          </ConferenceItem>
          <ConferenceItem>
            <Image src={coOwnership} htmlWidth="331px" />
            <GlobalBox>
              <SubTitle>
                The User Co-Ownership
                <br /> Program
              </SubTitle>
              <DiscriptionWithMargin>
                SEEYOU will be partly user-owned. An equivalent of 10% of the
                original 2.5 million shares is gifted* without cost to our users
                during the first 25 months after Open Release on August 1st,
                2022.
              </DiscriptionWithMargin>
              <DiscriptionSub>(*Terms to be announced)</DiscriptionSub>
              <LearnMore />
            </GlobalBox>
          </ConferenceItem>
        </ul>
      </Container>
    </Section>
  );
};
export default Conference;
