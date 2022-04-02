import Hero from 'components/Hero';
import Toolbar from 'components/Toolbar';
// import FeaturesAccordion from 'components/FeaturesAccordion';
// import FeaturesTabs from '../../components/FeatherTabs';
import Conference from 'components/Conference';
import Support from 'components/Support';
import FAQ from 'components/FAQ';
import Footer from 'components/Footer';
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
        <FAQ />
        {/* <MediaQuery device={'mobile'}>
          <DownloadMobileFooter />
        </MediaQuery> */}
      </main>

      <Footer />
    </>
  );
};
export default Home;
