import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body{
    padding-bottom: 90px;
     ${({ theme }) => theme.device.tablet} {
    padding-bottom: 0;
  }
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  a{
      text-decoration:none;
  }
`;
