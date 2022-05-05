import {
  SupportSection,
  SupportContainer,
  Title,
  Box,
  Discription,
  DiscriptionWithMargin,
  BoxIMG,
  SupportLi,
  SupportUl,
  Discriptionltd
} from './Support.styled';

import Container from '../../Container'
import { Image } from '@chakra-ui/react';
import AppleStore from 'image/support/AppStore.png';
import GooglePlay from 'image/support/GooglePlay.png';

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
            Active Users are published live in the app
          </Discription>
        </Box>
        <BoxIMG>
        <SupportUl>
        <SupportLi>
        <a href='mailto:hello@seeyou.eu?subject=Please add me to the SEEYOU pre-launch version 1.0.1 priority list" target="_self"'>
        <Image src={AppleStore} htmlWidth="190px" alt="selfie in seeyou" />
        </a>
        {/* <Play src={PlayImg} /> */}
        </SupportLi>
        <SupportLi>
        <a href='mailto:hello@seeyou.eu?subject=Please add me to the SEEYOU pre-launch version 1.0.1 priority list" target="_self"'>
        <Image src={GooglePlay} htmlWidth="190px" alt="selfie in seeyou" />
        </a>
        {/* <Play src={PlayImg} /> */}
        </SupportLi>
        </SupportUl>
        </BoxIMG>
      </SupportContainer>
      <Container>
          <Discriptionltd>
          SEEYOU LLC, The CHQ Building, Custom House Quay, Dublin 1, D01 Y6H7 Ireland
          </Discriptionltd>
      </Container>
    </SupportSection>
  );
};
export default Support;
