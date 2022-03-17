import Hero from 'components/Hero';
import Rewarded from 'components/Rewarded';
import FeaturesMobile from 'components/FeaturesMobile';
import Conference from 'components/Conference';
import Support from 'components/Support';
import MediaQuery from '../../components/MediaQuery';

const Home = () => {
  return (
    <>
      <Hero />
      <Rewarded />
      <MediaQuery device={'mobile'}>
        <FeaturesMobile />
      </MediaQuery>

      <Conference />
      <Support />
    </>
  );
};
export default Home;
