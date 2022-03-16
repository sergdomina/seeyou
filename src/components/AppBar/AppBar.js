import { Nav, Link } from './AppBar.styled';

export const AppBar = () => {
  return (
    <>
      <Link to="/">SeeYou</Link>
      <Nav>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/ownership">Co-ownership</Link>
        <Link to="/help">Help</Link>
      </Nav>
    </>
  );
};
