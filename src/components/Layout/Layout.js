import { Outlet } from "react-router-dom";
import { GlobalStyle } from "../GlobalStyle";
import { AppBar } from "../AppBar/AppBar";
import { Container } from "../Container/Container.styled";

export const Layout = () => {
  return (
    <Container>
      <GlobalStyle />
      <AppBar />
      <Outlet />
    </Container>
  );
};
