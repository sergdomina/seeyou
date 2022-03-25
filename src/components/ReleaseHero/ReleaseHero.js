import React from 'react';
import {
  ReleaseSection,
  HelpSection,
  SectionTitle,
  ReleaseContainer,
  FeaturesAccordionItem,
} from './ReleaseHero.styled';
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
  useAccordionItemState,
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

const ReleaseHero = () => {
  const FeaturesTab = React.forwardRef((props, ref) => {
    const tabProps = useTab({ ...props, ref });
    const acordinProps = useAccordionItemState({ ...props, ref });

    const w = {
      color: '#000000',
      border: 'none',
      _hover: variant,
      _focus: variant,
      _expanded: { outline: 'none', background: '#fff' },
      fontSize: '18px',
      boxShadow: 'none',
    };
    return (
      <Box __css={w} {...tabProps} onClick={() => acordinProps.onClose()}>
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
                boxShadow={'0px 1px 4px rgba(0, 0, 0, 0.25)'}
              >
                <TabList
                  gap={4}
                  flexDirection={'column'}
                  border={'none'}
                  padding={'24px 32px'}
                >
                  <FeaturesTab>iOS release notes</FeaturesTab>

                  <FeaturesTab>Android release notes</FeaturesTab>

                  <FeaturesTab>Mac release notes</FeaturesTab>

                  <FeaturesTab>Windows release notes</FeaturesTab>

                  <FeaturesTab>Linux release notes</FeaturesTab>

                  <FeaturesTab>Chrome OS release notes</FeaturesTab>
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
                consequat sunt nostrud amet.1
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
                consequat sunt nostrud amet.1
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
                consequat sunt nostrud amet.2
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
                consequat sunt nostrud amet.3
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
                consequat sunt nostrud amet.4
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
                consequat sunt nostrud amet.5
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
                consequat sunt nostrud amet.6
              </p>
            </TabPanel>
          </FeaturesTabPanels>
        </Tabs>
      </ReleaseContainer>
    </ReleaseSection>
  );
};
export default ReleaseHero;
