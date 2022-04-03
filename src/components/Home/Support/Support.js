import {
  SupportSection,
  SupportContainer,
  Title,
  Box,
  Discription,
  DiscriptionWithMargin,
} from './Support.styled';

import { Image } from '@chakra-ui/react';
import PlayImg from 'image/support/play.png';

const Support = () => {
  return (
    <SupportSection>
      <SupportContainer>
        <Box>
          <Title>Release Date and Performance Tracking</Title>
          <DiscriptionWithMargin>
            SEEYOU pre-launch version 1.0.1 will be available for download in
            the App Store and Google Play in the first week of May 2022.
          </DiscriptionWithMargin>
          <Discription>
            From Open Release on August 1st, Monthly Active Users and Daily
            Active Users are published live in the app. Further performance
            guidance will not be given.
          </Discription>
        </Box>
        <Image src={PlayImg} htmlWidth="294px" alt="selfie in seeyou" />
        {/* <Play src={PlayImg} /> */}
      </SupportContainer>
    </SupportSection>
  );
};
export default Support;
