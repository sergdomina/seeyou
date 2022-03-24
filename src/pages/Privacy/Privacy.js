import PrivacyHero from 'components/PrivacyHero';
import PrivacyDescr from 'components/PrivacyDescr';
import DownloadMobileFooter from '../../components/DownloadMobileFooter';
import MediaQuery from '../../components/MediaQuery';
const Privacy = () => {
  return (
    <>
      <PrivacyHero />
      <PrivacyDescr />
      <MediaQuery device={'mobile'}>
        <DownloadMobileFooter />
      </MediaQuery>
    </>
  );
};

export default Privacy;
