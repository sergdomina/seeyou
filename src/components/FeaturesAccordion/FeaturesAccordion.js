import Section from '../Section';
import {
  FeaturesTitle,
  FeaturesAccordionItem,
  FeaturesContainer,
} from './FeaturesAccordion.styled';
import {
  Accordion,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
} from '@chakra-ui/react';
import GlobalImage from '../GlobalImage';
import {
  RewindThumb,
  LibraryThumb,
  LoopIconThumb,
  CallIconThumb,
  MessageIconThumb,
  NoteIconThumb,
} from '../FeathersThumbIcon/FeathersThumbIcon';

const FeaturesAccordion = () => {
  return (
    <Section>
      <FeaturesContainer>
        <FeaturesTitle>Features</FeaturesTitle>
        <Accordion allowToggle>
          <FeaturesAccordionItem>
            <h2>
              <AccordionButton
                padding={'24px 32px'}
                fontSize={'18px'}
                boxShadow={'none'}
                _hover={{ boxShadow: 'none' }}
              >
                <Flex align={'center'} flex="1" textAlign="left">
                  <RewindThumb />
                  Live conference rewind
                </Flex>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <GlobalImage mb={'40'} />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </FeaturesAccordionItem>
          <FeaturesAccordionItem>
            <h2>
              <AccordionButton
                padding={'24px 32px'}
                fontSize={'18px'}
                boxShadow={'none'}
                _hover={{ boxShadow: 'none' }}
              >
                <Flex align={'center'} flex="1" textAlign="left">
                  <LibraryThumb />
                  User-centered library
                </Flex>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <GlobalImage mb={'40'} />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </FeaturesAccordionItem>

          <FeaturesAccordionItem>
            <h2>
              <AccordionButton
                padding={'24px 32px'}
                fontSize={'18px'}
                boxShadow={'none'}
                _hover={{ boxShadow: 'none' }}
              >
                <Flex align={'center'} flex="1" textAlign="left">
                  <LoopIconThumb />
                  60 second loop
                </Flex>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <GlobalImage mb={'40'} />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </FeaturesAccordionItem>
          <FeaturesAccordionItem>
            <h2>
              <AccordionButton
                padding={'24px 32px'}
                fontSize={'18px'}
                boxShadow={'none'}
                _hover={{ boxShadow: 'none' }}
              >
                <Flex align={'center'} flex="1" textAlign="left">
                  <CallIconThumb />
                  Calls during conference
                </Flex>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <GlobalImage mb={'40'} />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </FeaturesAccordionItem>
          <FeaturesAccordionItem>
            <h2>
              <AccordionButton
                padding={'24px 32px'}
                fontSize={'18px'}
                boxShadow={'none'}
                _hover={{ boxShadow: 'none' }}
              >
                <Flex align={'center'} flex="1" textAlign="left">
                  <MessageIconThumb />
                  30 second video messages
                </Flex>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <GlobalImage mb={'40'} />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </FeaturesAccordionItem>
          <FeaturesAccordionItem>
            <h2>
              <AccordionButton
                padding={'24px 32px'}
                fontSize={'18px'}
                boxShadow={'none'}
                _hover={{ boxShadow: 'none' }}
              >
                <Flex align={'center'} flex="1" textAlign="left">
                  <NoteIconThumb />
                  Timecoded sticky notes
                </Flex>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <GlobalImage mb={'40'} />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </FeaturesAccordionItem>
        </Accordion>
      </FeaturesContainer>
    </Section>
  );
};
export default FeaturesAccordion;
