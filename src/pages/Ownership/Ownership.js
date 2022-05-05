import OwnershipHero from 'components/OwnershipHero';
import Support from 'components/Home/Support/Support';
// import DownloadMobileFooter from '../../components/DownloadMobileFooter';
// import MediaQuery from '../../components/MediaQuery';
const Ownership = () => {
  return (
    <>
      <main>
        <OwnershipHero />
        <Support />
        {/*<HowItWorks />
        <MoreDetails />
        <FAQ />*/}
        {/* <MediaQuery device={'mobile'}>
          <DownloadMobileFooter />
        </MediaQuery> */}
      </main>
    </>
  );
};
export default Ownership;
