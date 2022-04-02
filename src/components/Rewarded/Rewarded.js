import {
  RewardedTitle,
  RewerdThumb,
  RewerdThumb2,
  RewardedDiscription,
  RewardedContainer,
} from './Rewarded.styled';
import GlobalSection from '../Section';
import GlobalBox from '../GlobalBox';
import RewerdSeemoji from './rewerd_seemoji.png';
import RewerdTool from './rewerd_toolbar.png'
import LearnMore from '../LearnMore';
const Rewarded = () => {
  return (
    <GlobalSection>
      <RewardedContainer>
        <RewerdThumb src={RewerdSeemoji}/>
        <GlobalBox>
          <RewardedTitle>
          The Toolbar
          </RewardedTitle>
          <RewardedDiscription>
          You get an extra video conference toolbar providing a uniform set of tools for video conference providers. Meaning you can quickly master most platforms while still benefitting from their native functionality
          </RewardedDiscription>
          <LearnMore />
        </GlobalBox>
      </RewardedContainer>
      <RewardedContainer>
        <RewerdThumb2 src={RewerdTool}/>
      </RewardedContainer>
    </GlobalSection>
  );
};
export default Rewarded;
