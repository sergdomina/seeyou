import Section from '../Section';
import {
  FeaturesTitle,
  FeaturesAccordionItem,
  FeaturesContainer,
  FeaturesIconThumb,
} from './FeaturesFeaturesMobile.styled';
import {
  Accordion,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
} from '@chakra-ui/react';
import GlobalImage from '../GlobalImage';
import { ReactComponent as LibraryIcon } from 'image/feathers/library.svg';
import { ReactComponent as LoopIcon } from '../../image/feathers/loop.svg';
import { ReactComponent as CallIcon } from '../../image/feathers/call.svg';
import { ReactComponent as MessageIcon } from '../../image/feathers/message.svg';
import { ReactComponent as NoteIcon } from '../../image/feathers/note.svg';

const FeaturesMobile = () => {
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
                  <FeaturesIconThumb>
                    <LibraryIcon />
                  </FeaturesIconThumb>
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
                  <FeaturesIconThumb>
                    <LoopIcon />
                  </FeaturesIconThumb>
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
                  <FeaturesIconThumb>
                    <CallIcon />
                  </FeaturesIconThumb>
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
                  <FeaturesIconThumb>
                    <MessageIcon />
                  </FeaturesIconThumb>
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
                  <FeaturesIconThumb>
                    <NoteIcon />
                  </FeaturesIconThumb>
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
export default FeaturesMobile;
