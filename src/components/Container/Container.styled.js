import styled from 'styled-components';
import { device, size } from '../../constants/mediaSize';

const Container = styled.div`
  padding: 0px 24px;
  margin: 0 auto;
  width: 100%;

  ${device.mobile} {
    width: 343px;
  }

  ${device.tablet} {
    width: 616px;
  }

  ${device.default} {
    width: 830px;
  }

  ${device.desktop} {
    width: 1140px;
    
  }
`;
const ContainerHeader = styled.div`
  padding: 0px 24px;
  margin: 0 auto;
  width: 100%;
  ${device.tablet} {
    width: 688px;
  }
  ${device.default} {
    width: 880px;
  }
  ${device.desktop} {
    width: 1306px;
  }
`;
export default Container;
