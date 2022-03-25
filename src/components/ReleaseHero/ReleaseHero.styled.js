import styled from 'styled-components';
import Container from '../Container';
import { AccordionItem } from '@chakra-ui/react';

export const ReleaseSection = styled.div`
  padding-bottom: 43px;
  ${({ theme }) => theme.device.desktop} {
    padding-bottom: 135px;
  }
`;

export const HelpSection = styled.div`
  padding-top: 62px;
  padding-bottom: 67px;
  background: ${({ theme }) => theme.colors.blue};
  ${({ theme }) => theme.device.desktop} {
    padding-top: 90px;
    padding-bottom: 84px;
  }
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  font-size: 30px;
  line-height: 1.4;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.device.desktop} {
    font-size: 24px;
    line-height: 1.5;
  }
`;
export const ReleaseContainer = styled(Container)`
  padding: 0;
`;

export const FeaturesAccordionItem = styled(AccordionItem)`
  border: none;
  background: #ffffff;
  box-shadow: 0px 0px 19px rgba(0, 0, 0, 0.06);
`;
