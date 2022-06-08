import styled from 'styled-components';
import { device, size } from '../../constants/mediaSize';

<<<<<<< HEAD
const Container = styled.div`
  padding: 0 15px;
=======
export const Container = styled.div`
  padding: 0px 24px;
>>>>>>> 347eb394f405f5912342f75456038f9d7a2a5f42
  margin: 0 auto;
  width: 100%;

  ${device.mobile} {
    /* width: 343px; */
    width: 373px;
  }

  ${device.tablet} {
<<<<<<< HEAD
    padding: 0 0px;
    width: 622px;
  }

  ${device.default} {
    padding: 0 24px;
    width: 830px;
  }
  ${device.desktop} {
    width: 1140px;
  }
=======
    width: ${size.tablet};
  }

  ${device.desktop}{
    width: ${size.desktop};
  }

  background: ${({ theme }) => theme.colors.body_bg};
>>>>>>> 347eb394f405f5912342f75456038f9d7a2a5f42
`;
const ContainerHeader = styled.div`
  padding: 0px 24px;
  margin: 0 auto;
  width: 100%;
  ${device.tablet} {
    width: 688px;
    padding: 0px 10px;
  }
  ${device.default} {
    width: 880px;
    padding: 0px 24px;
  }
  ${device.desktop} {
    width: 1306px;
    
  }
`;

export default Container;
