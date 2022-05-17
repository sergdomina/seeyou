import Support from 'components/Home/Support/Support';
import FAQ from 'components/FAQ/FAQ';
import OurLeadership from 'components/OurLeadership';
import { ScrollToTop } from 'hooks/ScrollToTop';

const Help = () => {
  ScrollToTop();
  return (
    <>
      <main>
        <FAQ />
        <OurLeadership />

        {/*<HelpCenter />
         <MediaQuery device={'mobile'}>
          <DownloadMobileFooter />
        </MediaQuery> */}
      </main>
      <Support />
      {/*<Footer */}
    </>
  );
};

export default Help;
