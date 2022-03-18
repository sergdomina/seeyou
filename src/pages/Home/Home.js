import Hero from 'components/Hero';
import Rewarded from 'components/Rewarded';
import FeaturesAccordion from 'components/FeaturesAccordion';
import FeaturesTabs from '../../components/FeatherTabs';
import Conference from 'components/Conference';
import Support from 'components/Support';
import FAQ from 'components/FAQ';
import MediaQuery from '../../components/MediaQuery';

const Home = () => {
  return (
    <>
      <Hero />
      <Rewarded />
      <MediaQuery device={'mobile'}>
        <FeaturesAccordion />
      </MediaQuery>
      <MediaQuery device={'tablet'}>
        <FeaturesTabs />
      </MediaQuery>

      <Conference />
      <Support />
      <FAQ />
    </>
  );
};
export default Home;
