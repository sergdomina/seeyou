import HeroAbout from 'components/HeroAbout';
import OurLeadership from 'components/OurLeadership';
import DownloadMobileFooter from '../../components/DownloadMobileFooter';
import MediaQuery from '../../components/MediaQuery';
const About = () => {
  return (
    <>
      <HeroAbout />
      <OurLeadership />
      <MediaQuery device={'mobile'}>
        <DownloadMobileFooter />
      </MediaQuery>
    </>
  );
};

export default About;
