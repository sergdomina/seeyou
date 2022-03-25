import TermsHero from 'components/TermsHero';
import TermsDescr from 'components/TermsDescr';
import Footer from 'components/Footer';
import DownloadMobileFooter from '../../components/DownloadMobileFooter';
import MediaQuery from '../../components/MediaQuery';
const Terms = () => {
  return (
    <>
      <main>
        <TermsHero />
        <TermsDescr />
        <MediaQuery device={'mobile'}>
          <DownloadMobileFooter />
        </MediaQuery>
      </main>
      <Footer />
    </>
  );
};

export default Terms;
