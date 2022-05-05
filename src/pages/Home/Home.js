import Hero from 'components/Home/Hero';
import Toolbar from 'components/Home/Toolbar';
// import FeaturesAccordion from 'components/FeaturesAccordion';
// import FeaturesTabs from '../../components/FeatherTabs';
import Conference from 'components/Home/Conference';
import Support from 'components/Home/Support';

// import MediaQuery from '../../components/MediaQuery';
// import DownloadMobileFooter from '../../components/DownloadMobileFooter';
const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <Toolbar />
        {/* <MediaQuery device={'mobile'}>
          <FeaturesAccordion />
        </MediaQuery>
        <MediaQuery device={'tablet'}>
          <FeaturesTabs />
        </MediaQuery> */}

        <Conference />
        <Support />

        {/* <MediaQuery device={'mobile'}>
          <DownloadMobileFooter />
        </MediaQuery> */}
      </main>
    </>
  );
};
export default Home;
