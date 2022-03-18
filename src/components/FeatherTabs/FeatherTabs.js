import Section from '../Section';
import Container from '../Container';
import {
  FeaturesTitle,
  FeaturesTabList,
  FeaturesContainer,
  FeaturesIconThumb,
} from './FeatherTabs.styled';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import GlobalImage from '../GlobalImage';
import { ReactComponent as RewindIcon } from 'image/feathers/rewind.svg';
import { ReactComponent as LibraryIcon } from 'image/feathers/library.svg';
import { ReactComponent as LoopIcon } from '../../image/feathers/loop.svg';
import { ReactComponent as CallIcon } from '../../image/feathers/call.svg';
import { ReactComponent as MessageIcon } from '../../image/feathers/message.svg';
import { ReactComponent as NoteIcon } from '../../image/feathers/note.svg';

const FeatherTabs = () => {
  return (
    <Section>
      <Container>
        <FeaturesTitle>Feathers</FeaturesTitle>
        <Tabs display={'flex'}>
          <TabList flexDirection={'column'}>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab>Three</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Section>
  );
};
export default FeatherTabs;
