import { Outlet } from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyle';
import AppBar from '../AppBar';
import DownloadMobileFooter from '../../components/DownloadMobileFooter';
import MediaQuery from '../MediaQuery';

const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <AppBar />
      <Outlet />
      <MediaQuery device={'mobile'}>
        <DownloadMobileFooter />
      </MediaQuery>
    </>
  );
};

export default Layout;
