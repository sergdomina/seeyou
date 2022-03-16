import { createGlobalStyle } from 'styled-components';

// export default createGlobalStyle`
//  @font-face {
//   font-family: 'Lato_Bold';
//   src: url('../fonts/lato-bold/Lato-Bold.woff') format('woff'),
//     url('../fonts/lato-bold/Lato-Bold.woff2') format('woff2');
//   font-weight: 800;
//   font-style: normal;
// }
// `;

import Lato_Bold from '../fonts/lato-bold/Lato-Bold.woff';
import Lato_Bold2 from '../fonts/lato-bold/Lato-Bold.woff2';

import Lato_Regular from '../fonts/lato-regular/Lato-Regular.woff';
import Lato_Regular2 from '../fonts/lato-regular/Lato-Regular.woff2';

import Poppins_Medium from '../fonts/poppins-medium/Poppins-Medium.woff';
import Poppins_Medium2 from '../fonts/poppins-medium/Poppins-Medium.woff2';

import Poppins_SemiBold from '../fonts/poppins-SemiBold/Poppins-SemiBold.woff';
import Poppins_SemiBold2 from '../fonts/poppins-SemiBold/Poppins-SemiBold.woff2';

import Poppins_ExtraBold from '../fonts/poppins-ExtraBold/Poppins-ExtraBold.woff';
import Poppins_ExtraBold2 from '../fonts/poppins-ExtraBold/Poppins-ExtraBold.woff2';
export default createGlobalStyle`
    @font-face {
        font-family: 'Lato_Bold';
        src: local('Lato_Bold'), local('Lato_Bold'),
        url(${Lato_Bold2}) format('woff2'),
        url(${Lato_Bold}) format('woff');
        font-weight: 800;
        font-style: normal;
    }
    @font-face {
        font-family: 'Lato_Regular';
        src: local('Lato_Regular'), local('Lato_Regular'),
        url(${Lato_Regular2}) format('woff2'),
        url(${Lato_Regular}) format('woff');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Poppins_Medium';
        src: local('Poppins_Medium'), local('Poppins_Medium'),
        url(${Poppins_Medium2}) format('woff2'),
        url(${Poppins_Medium}) format('woff');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'Poppins_SemiBold';
        src: local('Poppins_SemiBold'), local('Poppins_SemiBold'),
        url(${Poppins_SemiBold2}) format('woff2'),
        url(${Poppins_SemiBold}) format('woff');
        font-weight: 600;
        font-style: normal;
    }
    @font-face {
        font-family: 'Poppins_ExtraBold';
        src: local('Poppins_ExtraBold'), local('Poppins_ExtraBold'),
        url(${Poppins_ExtraBold2}) format('woff2'),
        url(${Poppins_ExtraBold}) format('woff');
        font-weight: 800;
        font-style: normal;
    }
`;
