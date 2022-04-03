import { createGlobalStyle } from 'styled-components';
import heroBcg from '../../src/image/hero/hero_bg.svg';


export const GlobalStyle = createGlobalStyle`
  body{
    padding: 0px 0px;
    background-image: url(${heroBcg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    padding-bottom: 97px;
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
  .visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}
`;
