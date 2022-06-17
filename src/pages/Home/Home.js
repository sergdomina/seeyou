import Hero from 'components/Home/Hero';
import Toolbar from 'components/Home/Toolbar';
import Conference from 'components/Home/Conference';
import Support from 'components/Home/Support';
import Accordion from 'components/Accordion';
import { ScrollToTop } from 'hooks/ScrollToTop';

const Home = () => {
  ScrollToTop();
  return (
    <>
      <main>
        <Hero />
        <Accordion />
        <Toolbar />
        {/* <MediaQuery device={'mobile'}>
          <FeaturesAccordion />
        </MediaQuery>
        <MediaQuery device={'tablet'}>
          <FeaturesTabs />
        </MediaQuery> */}

        <Conference />

        {/* <MediaQuery device={'mobile'}>
          <DownloadMobileFooter />
        </MediaQuery> */}
      </main>
      <Support />
    </>
  );
};
export default Home;
