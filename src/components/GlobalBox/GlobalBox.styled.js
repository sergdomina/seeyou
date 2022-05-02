import styled from 'styled-components';
export const Box = styled.div`
  /* width: 343px; */
  text-align: center;
  ${({ theme }) => theme.device.tablet} {
    width: 618px;
    margin: 0 auto;
    text-align: center;
  }
  ${({ theme }) => theme.device.default} {
    width: 416px;
    text-align: left;
  }
  ${({ theme }) => theme.device.desktop} {
    width: 510px;
    text-align: left;
  } ;
`;
