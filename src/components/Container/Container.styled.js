import styled from 'styled-components';
import { device, size } from '../../constants/mediaSize';

const Container = styled.div`
  padding: 0px 24px;
  margin: 0 auto;
  width: 100%;

  ${device.mobile} {
    width: ${size.mobile};
  }

  ${device.tablet} {
    width: ${size.tablet};
  }

  ${device.desktop} {
    width: ${size.desktop};
  }
`;
export default Container;
