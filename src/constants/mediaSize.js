export const size = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1200px',
};
export const device = {
  // mobile: `min-width: ${size.mobile}`,
  mobile: `@media screen and (min-width: ${size.mobile})`,
  tablet: `min-width: ${size.tablet}`,
  desktop: `min-width: ${size.desktop}`,
};
