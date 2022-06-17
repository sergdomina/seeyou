import {} from './Accordion.styled';
import {
  ChakraProvider,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/react';
import { MinusIcon, AddIcon } from '@chakra-ui/icons';
import React from 'react';
// import GlobalImage from '../GlobalImage';
import Container from '../Container/Container.styled';
import { Questions, Answer } from './Accordion.styled';
const Acord = () => {
  return (
    <Container>
      <ChakraProvider>
        <Box p={4}>
          <Accordion
            allowMultiple
            borderRadius="12px"
            backgroundColor="#ECF1FE"
          >
            {/* <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Questions>Lorem Ipsum</Questions>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} textAlign="left">
                <Answer>LOrem Ipsum mathefucka</Answer>
              </AccordionPanel>
            </AccordionItem> */}
            <AccordionItem border={'none'}>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _hover={{ backgroundColor: 'transparent' }}
                    >
                      <Box flex="1" textAlign="left">
                        <Questions>Lorem Ipsum 1</Questions>
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem border={'none'}>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _hover={{ backgroundColor: 'transparent' }}
                    >
                      <Box flex="1" textAlign="left">
                        <Questions>Lorem Ipsum 2</Questions>
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Answer>LOrem Ipsum mathefucka</Answer>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </Box>
      </ChakraProvider>
    </Container>
  );
};
export default Acord;
