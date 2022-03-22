import React from 'react';
import {
  ReleaseSection,
  HelpSection,
  SectionTitle,
  ReleaseContainer,
  FeaturesAccordionItem,
} from './HeroRelease.styled';
import {
  Tabs,
  TabList,
  TabPanel,
  useTab,
  useTabPanels,
  Box,
  Accordion,
  AccordionButton,
  Flex,
  AccordionIcon,
  AccordionPanel,
} from '@chakra-ui/react';
import Container from '../Container';

const variant = {
  borderBottom: '1px solid #000000',
  outline: 'none',
  background: '#fff',
  color: '#000000',
  fontWeight: '800',
};

const HelpCenter = () => {
  const FeaturesTab = React.forwardRef((props, ref) => {
    const tabProps = useTab({ ...props, ref });
    const w = {
      color: '#6E7191',
      border: 'none',
      _hover: variant,
      _focus: variant,
      _expanded: { outline: 'none', background: '#fff' },
      fontSize: '18px',
      boxShadow: 'none',
    };
    return (
      <Box __css={w} {...tabProps}>
        {tabProps.children}
      </Box>
    );
  });
  const FeaturesTabPanels = React.forwardRef((props, ref) => {
    const tabProps = useTabPanels({ ...props, ref });
    const tp = {
      padding: '0px 24px',
    };
    return (
      <Box __css={tp} {...tabProps}>
        {tabProps.children}
      </Box>
    );
  });
  return (
    <ReleaseSection>
      <HelpSection>
        <Container>
          <SectionTitle>SEEYOU iOS release notes</SectionTitle>
        </Container>
      </HelpSection>
      <ReleaseContainer>
        <Tabs>
          <Accordion allowToggle marginBottom={'43px'}>
            <FeaturesAccordionItem position={'relative'}>
              <h2>
                <AccordionButton
                  padding={'24px 32px'}
                  fontSize={'18px'}
                  boxShadow={'none'}
                  _hover={{ boxShadow: 'none' }}
                  aria_expanded={'false'}
                >
                  <Flex align={'center'} flex="1" textAlign="left">
                    Release Notes
                  </Flex>

                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                padding={0}
                position={'absolute'}
                width={'100%'}
                background={'white'}
              >
                <TabList
                  gap={4}
                  flexDirection={'column'}
                  border={'none'}
                  padding={'24px 32px'}
                >
                  <FeaturesTab>Live conference rewind</FeaturesTab>

                  <FeaturesTab>User-centered library</FeaturesTab>

                  <FeaturesTab>60 second loop</FeaturesTab>

                  <FeaturesTab>Calls during conference</FeaturesTab>

                  <FeaturesTab>30 second video messages</FeaturesTab>

                  <FeaturesTab>Timecoded sticky notes</FeaturesTab>
                </TabList>
              </AccordionPanel>
            </FeaturesAccordionItem>
          </Accordion>
          <FeaturesTabPanels>
            <TabPanel padding={'0'}>
              <p>
                1! Amet minim mollit non deserunt ullamco est sit aliqua dolor
                do amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet. 1! Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt nostrud amet. 1! Amet minim mollit non
                deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit. Exercitation veniam
                consequat sunt nostrud amet.
              </p>
            </TabPanel>
            <TabPanel padding={'0'}>
              <p>
                1! Amet minim mollit non deserunt ullamco est sit aliqua dolor
                do amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet. 1! Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt nostrud amet. 1! Amet minim mollit non
                deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit. Exercitation veniam
                consequat sunt nostrud amet.
              </p>
            </TabPanel>
            <TabPanel padding={'0'}>
              <p>
                2! Amet minim mollit non deserunt ullamco est sit aliqua dolor
                do amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet. 2! Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt nostrud amet. 2! Amet minim mollit non
                deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit. Exercitation veniam
                consequat sunt nostrud amet.
              </p>
            </TabPanel>
            <TabPanel padding={'0'}>
              <p>
                3! Amet minim mollit non deserunt ullamco est sit aliqua dolor
                do amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet. 3! Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt nostrud amet. 3! Amet minim mollit non
                deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit. Exercitation veniam
                consequat sunt nostrud amet.
              </p>
            </TabPanel>
            <TabPanel padding={'0'}>
              <p>
                4! Amet minim mollit non deserunt ullamco est sit aliqua dolor
                do amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet. 4! Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt nostrud amet. 4! Amet minim mollit non
                deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit. Exercitation veniam
                consequat sunt nostrud amet.
              </p>
            </TabPanel>
            <TabPanel padding={'0'}>
              <p>
                5! Amet minim mollit non deserunt ullamco est sit aliqua dolor
                do amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet. 5! Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt nostrud amet. 5! Amet minim mollit non
                deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit. Exercitation veniam
                consequat sunt nostrud amet.
              </p>
            </TabPanel>
            <TabPanel padding={'0'}>
              <p>
                6! Amet minim mollit non deserunt ullamco est sit aliqua dolor
                do amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet. 6! Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt nostrud amet. 6! Amet minim mollit non
                deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit. Exercitation veniam
                consequat sunt nostrud amet.
              </p>
            </TabPanel>
          </FeaturesTabPanels>
        </Tabs>
      </ReleaseContainer>
    </ReleaseSection>
  );
};
export default HelpCenter;
