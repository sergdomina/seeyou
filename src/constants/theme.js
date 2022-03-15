export const theme = Object.freeze({
  colors: {
    white: '#ffffff',
    black: '#333333',
    black_btn: '#303030',
    red: '#f44336',
    blue: '#D9DBE9',
    primaryText: '#404040',
    secondaryText: '#757575',
    body_bg: '#FAFAFA',
  },
  size: {
    mobile: '375px',
    tablet: '768px',
    desktop: '1188px',
  },
  device: {
    mobile: `@media screen and (min-width:375px)`,
    tablet: `@media screen and (min-width: 768px)`,
    desktop: `@media screen and (min-width: 1188px)`,
  },
  spacing: value => `${4 * value}px`,
});
