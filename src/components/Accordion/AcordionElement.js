import { } from './Accordion.styled';
import {
  ChakraProvider,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import React from 'react';
import GlobalImage from '../GlobalImage';
import Container from '../Container/Container.styled'
import { Questions, Answer } from './Accordion.styled';
const Acord = ( ) => {
  return (
    <Container>
    <ChakraProvider>
      <Box p={4}>
        <Accordion
        borderRadius="12px"
        backgroundColor="#ECF1FE"
        >
          <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Questions>
                    Lorem Ipsum
                    </Questions>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} textAlign="left">
                <Answer>
                LOrem Ipsum mathefucka
                </Answer>
              </AccordionPanel>
            

          </AccordionItem>
        </Accordion>

      </Box>
    </ChakraProvider>
    </Container>
  
  );
};
export default Acord;
