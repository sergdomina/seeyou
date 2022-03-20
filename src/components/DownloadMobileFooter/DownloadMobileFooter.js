import { DownloadLinkBox } from './DownloadMobileFooter.styled';
import DownloadLink from '../DownloadLink';
const DownloadMobileFooter = () => {
  return (
    <DownloadLinkBox>
      <DownloadLink to="/download">Download</DownloadLink>
    </DownloadLinkBox>
  );
};
export default DownloadMobileFooter;
