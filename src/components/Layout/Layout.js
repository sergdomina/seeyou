import { Outlet } from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyle';
import { AppBar } from '../AppBar/AppBar';
import { Download } from '../../components/Dowmload/Download';
import { MediaQuery } from '../MediaQuery/MediaQuery';

export const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <AppBar />
      <Outlet />
      <MediaQuery device={'mobile'}>
        <Download />
      </MediaQuery>
    </>
  );
};
