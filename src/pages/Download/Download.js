import DownloadHero from 'components/DownloadHero';
import Support from 'components/Home/Support/Support';
import { ScrollToTop } from 'hooks/ScrollToTop';

const Download = () => {
  ScrollToTop();
  return (
    <>
      <main>
        <DownloadHero />
      </main>
      <Support />
    </>
  );
};

export default Download;
