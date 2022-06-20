import {
  Section,
  ToolbarContainer,
  Box,
  Title,
  Img,
  Discription,
  ToolbarThumb,
  DivImage,
  Tool
} from './Toolbar.styled';
import MediaQuery from '../../MediaQuery';
import seemoji from 'image/toolbar/sm.svg';
import toolbar from 'image/toolbar/toolbar.svg';

const Toolbar = () => {
  return (
    <Section>
      <MediaQuery device={'mobile'}>
      <ToolbarContainer>
        <DivImage>
          <Img src={seemoji} alt={seemoji} />
        </DivImage>
        <ToolbarThumb>
          <Tool src={toolbar} alt="toolbar" />
        </ToolbarThumb>
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
      
      </MediaQuery>
      <MediaQuery device={'tablet'}>
      <ToolbarContainer>
        <DivImage>
          <Img src={seemoji} alt={seemoji} />
        </DivImage>
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
          <Tool src={toolbar} alt="toolbar" />
        </ToolbarThumb>
      </ToolbarContainer>
      </MediaQuery>
      <MediaQuery device={'default'}>
        <ToolbarContainer>
          <DivImage>
            <Img src={seemoji} alt={seemoji} />
          </DivImage>
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
      </MediaQuery>
      
    </Section>
  );
};
export default Toolbar;
