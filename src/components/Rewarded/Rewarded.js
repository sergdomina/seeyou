import {
  RewardedTitle,
  RewardedThumb,
  RewardedDiscription,
} from './Rewarded.styled';
import GlobalSection from '../Section';
const Rewarded = () => {
  return (
    <GlobalSection>
      <RewardedThumb />
      <RewardedTitle>
        Equitable
        <br />
        Communication
      </RewardedTitle>
      <RewardedDiscription>
        SEEYOU helps to streamline the conferencing communication and gives it’s
        users the opportunity to co-own for usage and sharing
      </RewardedDiscription>
    </GlobalSection>
  );
};
export default Rewarded;
