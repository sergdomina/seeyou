import {
  Section,
  ToolbarContainer,
  Box,
  Title,
  Img,
  Discription,
  ToolbarThumb,
} from './Toolbar.styled';

import seemoji from 'image/seemoji.svg';
import toolbar from 'image/toolbar/toolbar.png';
import Container from '../../Container/Container.styled'

const Toolbar = () => {
  return (
    <Section>
        <ToolbarContainer>
          <Img src={seemoji} alt={seemoji} />
          <Box>
            <Title>One Toolbar to Rule Them All</Title>
            <Discription>
              You get an extra video conference toolbar providing a uniform set of
              tools for video conference providers. Meaning you can quickly master
              most platforms while still benefitting from their native
              functionality
            </Discription>
          </Box>
        </ToolbarContainer>
        <ToolbarContainer>
        <ToolbarThumb>
          <img src={toolbar} alt="toolbar" />
        </ToolbarThumb>
        </ToolbarContainer>
    </Section>
  );
};
export default Toolbar;
