import { ConferenceTitle, ConferenceThumb, ConferenceDiscription } from "./Conference.styled";
import { GlobalSection} from "../Section/Section.styled";
export const Conference = () => {
    return (
      <GlobalSection>
        <div>  
         <ConferenceThumb/> 
        <ConferenceTitle>All conference provider events in one place</ConferenceTitle> 
        <ConferenceDiscription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</ConferenceDiscription>
        </div>
        <div>  
         <ConferenceThumb/> 
        <ConferenceTitle>End-to-end encryption</ConferenceTitle> 
        <ConferenceDiscription>SEEYOU chat is secured with end-to-end encryption so that even we cannot read your messages.</ConferenceDiscription>
        </div>
        <div>  
         <ConferenceThumb/> 
        <ConferenceTitle>Our Story</ConferenceTitle> 
        <ConferenceDiscription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</ConferenceDiscription>
        </div>
      </GlobalSection>
    );
  };