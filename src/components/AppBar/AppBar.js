import { Nav, Link, Header } from './AppBar.styled';
import { Container } from '../Container/Container.styled';

export const AppBar = () => {
  return (
    <Header>
      <Container>
    <Nav>
      <Link to="/">SeeYou</Link>
      <Link to="/products">Products</Link>
      <Link to="/about">About</Link>
      <Link to="/ownership">Co-ownership</Link>
      <Link to="/help">Help</Link>
    </Nav>
    </Container>
    </Header>

  );
};
