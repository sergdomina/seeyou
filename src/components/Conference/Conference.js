import {
  ConferenceTitle,
  ConferenceDiscription,
  ConfImg,
  SectionTitle,
  ConferenceItem,
} from './Conference.styled';
import GlobalSection from '../Section';
import Container from '../Container';
import GlobalImage from '../GlobalImage';
import SelfieImg from './Selfie_Loop_tm.png';
import StickyImg from './Sticky_Note.png';
import LibraryImg from './Library.png';
import RewindImg from './rewind.png';
import TrulyImg from './Truly.png';
import HomeImg from './Home_Screen.png';
import BrandImg from './Brands.png';
import OwnerImg from './co-ownership.png';
import GlobalBox from '../GlobalBox';
import LearnMore from '../LearnMore';
const Conference = () => {
  return (
    <GlobalSection>
      <Container>
        <SectionTitle />
        <ul>
          <ConferenceItem>
            <ConfImg src={SelfieImg}/>

            <GlobalBox>
              <ConferenceTitle>
              The Selfie Loop ™
              </ConferenceTitle>

              <ConferenceDiscription>
              SEEYOU provides a real-time virtual camera Selfie Loop, substituting your camera feed with a selfie video recording when getting a coffee, making a call, or stepping away for a second
              </ConferenceDiscription>
            </GlobalBox>
          </ConferenceItem>
          <ConferenceItem>
            <ConfImg src={StickyImg}/>
            <GlobalBox>
              <ConferenceTitle>The Notes</ConferenceTitle>
              <ConferenceDiscription>
              On Mac and Windows, SEEYOU provides fully encrypted hyperlinked sticky notes. Later, clicking on the link will automatically open the conference where you made the note if you have stored the conference in your private library.
              </ConferenceDiscription>
              <ConferenceDiscription>
              Recording and storage are only possible on desktop devices. On Android and iPhone, the sticky notes are instead time-stamped to the conference timeline
              </ConferenceDiscription>
            </GlobalBox>
          </ConferenceItem>
          <ConferenceItem>
            <ConfImg src={LibraryImg}/>
            <GlobalBox>
              <ConferenceTitle>The Library</ConferenceTitle>
              <ConferenceDiscription>
              SEEYOU allows you to store your recordings. These are kept in your private YouTube Studio® library. The sticky notes are hyperlinked to the recordings. Clicking on the link will automatically open the conference where you made the note
              </ConferenceDiscription>
            </GlobalBox>
          </ConferenceItem>
          <ConferenceItem>
            <ConfImg src={RewindImg}/>
            <GlobalBox>
              <ConferenceTitle>The Rewind</ConferenceTitle>
              <ConferenceDiscription>
              On Mac and Windows, SEEYOU enables real-time-rewind, allowing you to go back and check past parts while still following the live conference
              </ConferenceDiscription>
            </GlobalBox>
          </ConferenceItem>
          <ConferenceItem>
            <ConfImg src={TrulyImg}/>
            <GlobalBox>
              <ConferenceTitle>The Truly Private <br/> Communication</ConferenceTitle>
              <ConferenceDiscription>
              SEEYOU's chat, video and voice calls are end-to-end encrypted, meaning they’re genuinely private. SEEYOU cannot read the content nor see with whom you are communicating. Nor can anyone else. Unlike many other providers, this holds for group chats too.
              </ConferenceDiscription>
              <ConferenceDiscription>
              The chat, video, and voice calls work equally well outside video conferences. The encryption key is personal and managed by your mobile phone, and logs are not centrally stored by SEEYOU but are yours alone.
              </ConferenceDiscription>
            </GlobalBox>
          </ConferenceItem>
          <ConferenceItem>
            <ConfImg src={HomeImg}/>
            <GlobalBox>
              <ConferenceTitle>The Single View <br /> Homepage</ConferenceTitle>
              <ConferenceDiscription>
              <ul>
                <li>With your unread message</li>
                <li>All your virtual meetings in one place</li>
                <li>The one-stop-shop for creating conferences</li>
              </ul>
              </ConferenceDiscription>
              <ConfImg src={BrandImg}/>
            </GlobalBox>
          </ConferenceItem>
          <ConferenceItem>
            <ConfImg src={OwnerImg}/>
            <GlobalBox>
              <ConferenceTitle>The User Co-Ownership Program<br/> Program</ConferenceTitle>
              <ConferenceDiscription>
              SEEYOU will be partly user-owned. An equivalent of 10% of the original 2.5 million shares is gifted* without cost to our users during the first 25 months after Open Release on August 1st, 2022.
              </ConferenceDiscription>
              <ConferenceDiscription>
              (*Terms to be announced)
              </ConferenceDiscription>
              <LearnMore />
            </GlobalBox>
          </ConferenceItem>
        </ul>
      </Container>
    </GlobalSection>
  );
};
export default Conference;
