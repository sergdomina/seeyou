import { useState } from 'react';
import {
  HelpSection,
  SectionTitle,
  HelpContainer,
  HelList,
  HelpBox,
} from './HelpCenter.styled';
import HelpCenterItem from './HelpCenterItem';
import Container from '../Container';
import HelpInput from './HelpInput';
import { ReactComponent as SearchIcon } from 'image/search.svg';
const helpPost = [
  {
    title: 'General',
    subtitle: 'What is a Virtual Camera',
    excerpt: 'Why do I need to give so many permissions?',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
  },
  {
    title: 'Desktop',
    subtitle: 'Why does SEEYOU use Youtube to store my recordings?',
    excerpt: 'Will SEEYOU be available for corporates?',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
  },
  {
    title: 'Mobile',
    subtitle: 'Why there is no conference recording on Android?',
    excerpt: 'How do I use notes on mobile?',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
  },
  {
    title: 'Integrations',
    subtitle: 'Why I can’t connect my phone contacts?',
    excerpt: 'Why I can’t connect my phone contacts?',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
  },
  {
    title: 'Encryption',
    subtitle: 'Is your encryption better than Whatsapp?',
    excerpt: 'How do you encrypt chat backup?',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
  },
];

const HelpCenter = () => {
  const [filter, setFilter] = useState('');
  const filterHelpPost = () => {
    return helpPost.filter(post =>
      post.subtitle.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const filteredHelpPosts = filterHelpPost();
  return (
    <section>
      <HelpSection>
        <Container>
          <SectionTitle>Help Center</SectionTitle>
          <HelpBox>
            <HelpInput
              handleInput={({ currentTarget }) =>
                setFilter(currentTarget.value)
              }
            />
            <SearchIcon />
          </HelpBox>
        </Container>
      </HelpSection>
      <HelpContainer>
        <HelList>
          {filteredHelpPosts.map(item => (
            <HelpCenterItem key={item.title} item={item} />
          ))}
        </HelList>
      </HelpContainer>
    </section>
  );
};
export default HelpCenter;
