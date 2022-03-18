import { FAQTitle, FAQSection, FAQItem, FAQList } from './FAQ.styled';
import Container from '../Container';
const FAQ = () => {
  return (
    <FAQSection>
      <Container>
        <FAQTitle>FAQ</FAQTitle>
        <FAQList>
          <FAQItem>Why SEEYOU is free? What’s the catch?</FAQItem>
          <FAQItem>How does co-ownership work?</FAQItem>
          <FAQItem>How does co-ownership works?</FAQItem>
        </FAQList>
      </Container>
    </FAQSection>
  );
};
export default FAQ;
