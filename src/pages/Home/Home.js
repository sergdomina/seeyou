import Hero from 'components/Hero';
import Rewarded from 'components/Rewarded';
import { Conference } from '../components/Conference/Conference';
import { Support } from '../components/Support/Support';
const Home = () => {
  return (
    <>
      <Hero />
      <Rewarded />
      <Hero />
      <Rewarded />
      <Conference />
      <Support />
    </>
  );
};
export default Home;
