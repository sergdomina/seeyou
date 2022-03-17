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