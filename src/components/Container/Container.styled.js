import styled from 'styled-components';
import { device, size } from '../../constants/mediaSize';

const Container = styled.div`
  padding: 0 15px;
  margin: 0 auto;
  width: 100%;

  ${device.mobile} {
    /* width: 343px; */
    width: 373px;
  }

  ${device.tablet} {
    width: 618px;
  }

  ${device.default} {
    padding: 0 24px;
    width: 830px;
  }
  ${device.desktop} {
    width: 1140px;
  }
`;

export default Container;
