import {} from './Accordion.styled';
import {
  ChakraProvider,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Image,
} from '@chakra-ui/react';
import { MinusIcon, AddIcon } from '@chakra-ui/icons';
import React from 'react';
// import GlobalImage from '../GlobalImage';
import Container from '../Container/Container.styled';
import { Questions, Answer, PartnersDiv, PartnersUl, PartnersLi, Section} from './Accordion.styled';
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

function Acord() {
  return (
    <Section>
    <Container>
      <ChakraProvider>
        <Box >

          <Accordion allowMultiple paddingBottom="16px">
            <AccordionItem border={'none'}
              borderRadius="12px"
              backgroundColor="#ECF1FE">
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _hover={{ backgroundColor: 'transparent',
                      boxShadow: 'none'
                    }}
                    >
                      <Box flex="1" textAlign="left">
                        <Questions>Is SEEYOU entirely free?</Questions>
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Answer>
                      Yes, there are no in-app purchases
                    </Answer>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>


          <Accordion allowMultiple paddingBottom="16px">
            <AccordionItem border={'none'}
              borderRadius="12px"
              backgroundColor="#ECF1FE">
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _hover={{ backgroundColor: 'transparent', boxShadow: 'none' }}
                    >
                      <Box flex="1" textAlign="left">
                        <Questions>How does SEEYOU make money?</Questions>
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Answer>
                      We run ads
                    </Answer>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>

          <Accordion allowMultiple paddingBottom="16px">
            <AccordionItem border={'none'}
              borderRadius="12px"
              backgroundColor="#ECF1FE">
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _hover={{ backgroundColor: 'transparent', boxShadow: 'none' }}
                    >
                      <Box flex="1" textAlign="left">
                        <Questions>Which video conference providers work with SEEYOU?</Questions>
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Answer>
                      All these major ones and more are coming
                    </Answer>
                    <PartnersDiv>
                      <PartnersUl>
                        <PartnersLi>
                          <Image
                            src={GoogleMeet}
                            htmlWidth="105px"
                            alt="GoogleMeet" />
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
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>

          <Accordion allowMultiple paddingBottom="16px">
            <AccordionItem border={'none'}
              borderRadius="12px"
              backgroundColor="#ECF1FE">
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _hover={{ backgroundColor: 'transparent', boxShadow: 'none' }}
                    >
                      <Box flex="1" textAlign="left">
                        <Questions>Is storing conferences free?</Questions>
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Answer>
                    Yes
                    </Answer>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>

          <Accordion allowMultiple paddingBottom="16px">
            <AccordionItem border={'none'}
              borderRadius="12px"
              backgroundColor="#ECF1FE">
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _hover={{ backgroundColor: 'transparent', boxShadow: 'none'}}
                    >
                      <Box flex="1" textAlign="left">
                        <Questions>Is storing conferences safe?</Questions>
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Answer>
                    Your conferences are stored on your personal Youtube Studios  account, ensuring you benefit from all the safety features built into YouTube
                    </Answer>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>

          <Accordion allowMultiple paddingBottom="16px">
            <AccordionItem border={'none'}
              borderRadius="12px"
              backgroundColor="#ECF1FE">
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _hover={{ backgroundColor: 'transparent', boxShadow: 'none'}}
                    >
                      <Box flex="1" textAlign="left">
                        <Questions>Is recording and storing conferences legal?</Questions>
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Answer>
                    SEEYOU is EU-based. According to GDPR, you may only record and store conferences for personal use. Please consult your applicable laws and regulations if recording and storing conferences outside of the EU/EEA
                    </Answer>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>

          <Accordion allowMultiple paddingBottom="16px">
            <AccordionItem border={'none'}
              borderRadius="12px"
              backgroundColor="#ECF1FE">
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _hover={{ backgroundColor: 'transparent', boxShadow: 'none'}}
                    >
                      <Box flex="1" textAlign="left">
                        <Questions>Can I record when using SEEYOU on my mobile phone?</Questions>
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Answer>
                    No, limitations to the operating systems on iOS and Android prevents recordings on mobile phones. So, for now, this is a desktop feature only
                    </Answer>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>

          <Accordion allowMultiple paddingBottom="16px">
            <AccordionItem border={'none'}
              borderRadius="12px"
              backgroundColor="#ECF1FE">
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _hover={{ backgroundColor: 'transparent',boxShadow: 'none' }}
                    >
                      <Box flex="1" textAlign="left">
                        <Questions>Does the Selfie Loop™ work on my mobile phone?</Questions>
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Answer>
                    No, the same problem as with recordings. So, for now, this is a desktop feature only
                    </Answer>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>

          <Accordion allowMultiple paddingBottom="16px">
            <AccordionItem border={'none'}
              borderRadius="12px"
              backgroundColor="#ECF1FE">
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _hover={{ backgroundColor: 'transparent', boxShadow: 'none'}}
                    >
                      <Box flex="1" textAlign="left">
                        <Questions>How does the hyper-link on the sticky notes work?</Questions>
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Answer>
                    Simple, if you open SEEYOU and click on any note taken during a conference you have stored, the conference opens where you started taking the note. Kind of cool when preparing for an exam, a meeting, or whatever
                    </Answer>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>

          <Accordion allowMultiple paddingBottom="16px">
            <AccordionItem border={'none'}
              borderRadius="12px"
              backgroundColor="#ECF1FE">
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _hover={{ backgroundColor: 'transparent',boxShadow: 'none' }}
                    >
                      <Box flex="1" textAlign="left">
                        <Questions>Can I make notes on my phone?</Questions>
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Answer>
                    Absolutely
                    </Answer>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>

          <Accordion allowMultiple paddingBottom="16px">
            <AccordionItem border={'none'}
              borderRadius="12px"
              backgroundColor="#ECF1FE">
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _hover={{ backgroundColor: 'transparent',boxShadow: 'none' }}
                    >
                      <Box flex="1" textAlign="left">
                        <Questions>Are the notes encrypted?</Questions>
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Answer>
                    Yes, they are
                    </Answer>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>

          <Accordion allowMultiple paddingBottom="16px">
            <AccordionItem border={'none'}
              borderRadius="12px"
              backgroundColor="#ECF1FE">
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _hover={{ backgroundColor: 'transparent', boxShadow: 'none'}}
                    >
                      <Box flex="1" textAlign="left">
                        <Questions>Are the chat and video messages end-to-end encrypted?</Questions>
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Answer>
                    Yes, they are. SEEYOU's chat, video, and voice calls are end-to-end encrypted, meaning they’re genuinely private. SEEYOU cannot read the content nor see with whom you are communicating. Nor can anyone else
                    </Answer>

                    <Answer>
                    Unlike many other providers, this holds for group chats too. The encryption key is personal and managed by your mobile phone, and logs are not centrally stored by SEEYOU but are yours alone
                    </Answer>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>

          <Accordion allowMultiple paddingBottom="16px">
            <AccordionItem border={'none'}
              borderRadius="12px"
              backgroundColor="#ECF1FE">
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _hover={{ backgroundColor: 'transparent', boxShadow: 'none'}}
                    >
                      <Box flex="1" textAlign="left">
                        <Questions>Can I use SEEYOU's encrypted communication outside of video conferences?</Questions>
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Answer>
                    Yes, you both can and should
                    </Answer>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>

          <Accordion allowMultiple paddingBottom="16px">
            <AccordionItem border={'none'}
              borderRadius="12px"
              backgroundColor="#ECF1FE">
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _hover={{ backgroundColor: 'transparent',boxShadow: 'none' }}
                    >
                      <Box flex="1" textAlign="left">
                        <Questions>Why must I download SEEYOU both on desktop and mobile?</Questions>
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Answer>
                    Because your mobile phone store your personal end-to-end encryption key, making your communication truly private
                    </Answer>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>

          <Accordion allowMultiple paddingBottom="16px">
            <AccordionItem border={'none'}
              borderRadius="12px"
              backgroundColor="#ECF1FE">
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _hover={{ backgroundColor: 'transparent', boxShadow: 'none'}}
                    >
                      <Box flex="1" textAlign="left">
                        <Questions>How do I download SEEYOU?</Questions>
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Answer>
                    On the desktop, you download it either from www.seeyou.eu or from a link you either receive from a friend or copy from social media. On mobile, you download SEEYOU from the App Store or Google Play
                    </Answer>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>

          <Accordion allowMultiple paddingBottom="16px">
            <AccordionItem border={'none'}
              borderRadius="12px"
              backgroundColor="#ECF1FE">
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _hover={{ backgroundColor: 'transparent',boxShadow: 'none' }}
                    >
                      <Box flex="1" textAlign="left">
                        <Questions>When will SEEYOU be available?</Questions>
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Answer>
                    SEEYOU will be available for limited release in version 1.0.1 in the first week of May 2022. Open release, including SEEYOU for Chromebook and Linux, is on August 1st, 2022
                    </Answer>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>

          <Accordion allowMultiple paddingBottom="16px">
            <AccordionItem border={'none'}
              borderRadius="12px"
              backgroundColor="#ECF1FE">
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _hover={{ backgroundColor: 'transparent',boxShadow: 'none' }}
                    >
                      <Box flex="1" textAlign="left">
                        <Questions>Are you really giving away for free an equivalent of 10% of the original 2.5 million shares to the users?</Questions>
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Answer>
                    Yes, we are, we want to create a truly equitable global community. And giving back part of the company to our users seems the right thing to do, so that is what we are doing
                    </Answer>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>

          <Accordion allowMultiple paddingBottom="16px">
            <AccordionItem border={'none'}
              borderRadius="12px"
              backgroundColor="#ECF1FE">
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _hover={{ backgroundColor: 'transparent', boxShadow: 'none'}}
                    >
                      <Box flex="1" textAlign="left">
                        <Questions>Why are the shares given as equity tokens?</Questions>
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Answer>
                    Equity tokens are an easy way for users to earn fractional shares, and they allow users to move their holdings from SEEYOU to their own private cryptocurrency wallets in the form of ECR-20 based SEUs
                    </Answer>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>

          <Accordion allowMultiple paddingBottom="16px">
            <AccordionItem border={'none'}
              borderRadius="12px"
              backgroundColor="#ECF1FE">
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _hover={{ backgroundColor: 'transparent',boxShadow: 'none' }}
                    >
                      <Box flex="1" textAlign="left">
                        <Questions>When will the SEUs and common shares be listed?</Questions>
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Answer>
                    Both are planned listed on reputable exchanges in the fall of 2022
                    </Answer>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>

          <Accordion allowMultiple paddingBottom="16px">
            <AccordionItem border={'none'}
              borderRadius="12px"
              backgroundColor="#ECF1FE">
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _hover={{ backgroundColor: 'transparent', boxShadow: 'none'}}
                    >
                      <Box flex="1" textAlign="left">
                        <Questions>Are equity tokens interchangeable with shares?</Questions>
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Answer>
                    Yes, 100 equity tokens equal one share
                    </Answer>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>

          <Accordion allowMultiple paddingBottom="16px">
            <AccordionItem border={'none'}
              borderRadius="12px"
              backgroundColor="#ECF1FE">
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _hover={{ backgroundColor: 'transparent', boxShadow: 'none'}}
                    >
                      <Box flex="1" textAlign="left">
                        <Questions>Is SEEYOU looking for more people?</Questions>
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Answer>
                    Yes, we are. If you find that your values align with ours and you love what you do, we may be the place for you
                    </Answer>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>


        </Box>
      </ChakraProvider>
    </Container>
    </Section>
  );
}
export default Acord;
