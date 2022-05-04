import styled from 'styled-components';

export const Box = styled.div`
  width: auto;
  text-align: center;
  ${({ theme }) => theme.device.tablet} {
    margin: 0 auto;
    text-align: center;
  }
  ${({ theme }) => theme.device.default} {
    width: 416px;
    text-align: left;
    padding-right: 20px;
  }
  ${({ theme }) => theme.device.desktop} {
    width: 570px;
    text-align: left;
    padding-right: 30px;
  } ;
`;


