import { Outlet } from 'react-router-dom';
// import { GlobalStyle } from '../GlobalStyle';
import AppBar from '../AppBar';

const Layout = () => {
  return (
    <>
      {/* <GlobalStyle /> */}
      <AppBar />
      <Outlet />
    </>
  );
};

export default Layout;
