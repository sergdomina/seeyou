import styled from 'styled-components';
export const Box = styled.div`
  text-align: center;
  ${({ theme }) => theme.device.desktop} {
    width: 510px;
    text-align: left;
  } ;
`;
