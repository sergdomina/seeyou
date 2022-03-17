<<<<<<< HEAD
import { RewardedTitle,RewardedThumb, RewardedDiscription } from "./Rewarded.styled";
import { GlobalSection} from "../Section/Section.styled";
export const Rewarded = () => {
    return (
      <GlobalSection>
          
         <RewardedThumb/> 
        <RewardedTitle>Get rewarded for<br/> using and sharing<br/> SEEYOU</RewardedTitle> 
        <RewardedDiscription>Every time you share SEEYOU and your friends<br/> join you earn a slice of an equity token.<br/> 100 tokens = 1 SEEYOU share.<br/> Earning slices makes you a co-owner.</RewardedDiscription>
      </GlobalSection>
    );
  };
=======
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
>>>>>>> main
