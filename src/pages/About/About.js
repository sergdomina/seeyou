import AboutHero from 'components/AboutHero';
import OurLeadership from 'components/OurLeadership';
import DownloadMobileFooter from '../../components/DownloadMobileFooter';
import MediaQuery from '../../components/MediaQuery';
const About = () => {
  return (
    <>
      <AboutHero />
      <OurLeadership />
      <MediaQuery device={'mobile'}>
        <DownloadMobileFooter />
      </MediaQuery>
    </>
  );
};

export default About;
