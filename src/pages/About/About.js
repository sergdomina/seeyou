import AboutHero from 'components/AboutHero';
import Footer from 'components/Footer';
import Support from 'components/Home/Support';
import OurLeadership from 'components/OurLeadership';
// import DownloadMobileFooter from '../../components/DownloadMobileFooter';
// import MediaQuery from '../../components/MediaQuery';
const About = () => {
  return (
    <>
      <AboutHero />
      <OurLeadership />
      < Support />
      {/* <MediaQuery device={'mobile'}>
        <DownloadMobileFooter />
      </MediaQuery> */}
    </>
  );
};

export default About;
