import { Nav, Link } from "./AppBar.styled";

export const AppBar = () => {
  return (
    <Nav>
      <Link to="/products">Products</Link>
      <Link to="/about">About</Link>
    </Nav>
  );
};
