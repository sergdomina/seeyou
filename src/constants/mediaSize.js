export const size = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1188px',
};
export const device = {
  // mobile: `min-width: ${size.mobile}`,
  mobile: `@media screen and (min-width: ${size.mobile})`,
  tablet: `@media screen and (min-width: ${size.tablet})`,
  desktop: `@media screen and (min-width: ${size.desktop})`,
};
