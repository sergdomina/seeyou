import styled from 'styled-components';
import Container from '../Container';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
export const FeaturesTitle = styled.h2``;
export const FeaturesTabList = styled(TabList)`
  display: flex;
  flex-direction: column;
`;

export const FeaturesContainer = styled(Container)`
  padding: 0;
`;

export const FeaturesIconThumb = styled.div`
  margin-right: 29px;
`;
