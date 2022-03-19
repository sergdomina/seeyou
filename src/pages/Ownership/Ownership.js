import HeroOwnership from 'components/HeroOwnership';
import HowItWorks from 'components/HowItWorks';
import MoreDetails from 'components/MoreDetails';
import FAQ from 'components/FAQ';
import Footer from 'components/Footer';

const Ownership = () => {
  return (
    <>
      <main>
        <HeroOwnership />
        <HowItWorks />
        <MoreDetails />
        <FAQ />
      </main>

      <Footer />
    </>
  );
};
export default Ownership;
