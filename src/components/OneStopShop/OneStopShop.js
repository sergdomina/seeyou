import {
  Section,
  HiddenTitle,
  SubTitle,
  Discription,
  Box,
} from './OneStopShop.styled';

import { Image } from '@chakra-ui/react';

import Container from '../Container';
import GlobalBox from '../GlobalBox';

import LearnMore from '../LearnMore';

// import SelfieImg from '../../image/conference/selfieLoopTm.png';
// import StickyImg from '../../image/conference/stickyNote.png';
// import Library from '../../image/conference/library.png';
// import Rewind from '../../image/conference/rewind.png';
// import Calls from '../../image/conference/calls.png';
import HomeImg from './Home_Screen.png';
import BrandImg from './Brands.png';
// import OwnerImg from './co-ownership.png';

const OneStopShop = () => {
  return (
    <Section>
      <Container>
        <Box>
          <Image src={HomeImg} />
          <GlobalBox>
            <SubTitle>
              The Single View <br /> Homepage
            </SubTitle>
            <Discription>
              <ul>
                <li>With your unread message</li>
                <li>All your virtual meetings in one place</li>
                <li>The one-stop-shop for creating conferences</li>
              </ul>
            </Discription>
            <Image src={BrandImg} />
          </GlobalBox>
        </Box>
        {/* <ConferenceItem>
            <Image src={OwnerImg} />
            <GlobalBox>
              <SubTitle>
                The User Co-Ownership Program
                <br /> Program
              </SubTitle>
              <Discription>
                SEEYOU will be partly user-owned. An equivalent of 10% of the
                original 2.5 million shares is gifted* without cost to our users
                during the first 25 months after Open Release on August 1st,
                2022.
              </Discription>
              <Discription>(*Terms to be announced)</Discription>
              <LearnMore />
            </GlobalBox>
          </ConferenceItem> */}
      </Container>
    </Section>
  );
};
export default OneStopShop;
