import {
  RewardedTitle,
  RewardedThumb,
  RewardedDiscription,
  RewardedContainer,
} from './Rewarded.styled';
import GlobalSection from '../Section';
import GlobalBox from '../GlobalBox';
import GlobalImage from '../GlobalImage';
import LearnMore from '../LearnMore';
const Rewarded = () => {
  return (
    <GlobalSection>
      <RewardedContainer>
        <GlobalImage />
        <GlobalBox>
          <RewardedTitle>
            Get rewarded for using and sharing SEEYOU
          </RewardedTitle>
          <RewardedDiscription>
            SEEYOU helps to streamline the conferencing communication and gives
            it’s users the opportunity to co-own for usage and sharing
          </RewardedDiscription>
          <LearnMore />
        </GlobalBox>
      </RewardedContainer>
    </GlobalSection>
  );
};
export default Rewarded;
