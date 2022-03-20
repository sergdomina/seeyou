import HeroOwnership from 'components/HeroOwnership';
import HowItWorks from 'components/HowItWorks';
import MoreDetails from 'components/MoreDetails';
import FAQ from 'components/FAQ';
import Footer from 'components/Footer';
import DownloadMobileFooter from '../../components/DownloadMobileFooter';
import MediaQuery from '../../components/MediaQuery';
const Ownership = () => {
  return (
    <>
      <main>
        <HeroOwnership />
        <HowItWorks />
        <MoreDetails />
        <FAQ />
        <MediaQuery device={'mobile'}>
          <DownloadMobileFooter />
        </MediaQuery>
      </main>

      <Footer />
    </>
  );
};
export default Ownership;
