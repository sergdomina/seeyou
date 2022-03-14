import styled from 'styled-components';
import { device, size } from '../../constants/mediaSize';
console.log(device.mobile);
export const Container = styled.div`
  padding: 0px 15px;
  margin: 0 auto;
  width: 100%;
  outline: 2px solid red;
  ${device.mobile} {
    width: ${size.mobile};
  }

  @media screen and (${device.tablet}) {
    width: ${size.tablet};
  }

  @media screen and (${device.desktop}) {
    width: ${size.desktop};
  }

  background: ${({ theme }) => theme.colors.olive};
`;
