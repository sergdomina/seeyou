import styled from 'styled-components';

export const Questions = styled.p`
  font-family: ${({ theme }) => theme.fonts.descr.bold};
  font-size: 14px;
  line-height: 1.35;
  text-align: left;
  /* margin-bottom: 16px; */
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.device.tablet} {
    font-size: 16px;
  }
  ${({ theme }) => theme.device.default} {
    padding-top: 32px;
    padding-bottom: 32px;
    padding-left: 20px;
    font-size: 16px;
    /* &:hover {
      padding-bottom: 2px;
    } */
  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 20px;
  }
`;
export const Answer = styled.p`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 14px;
  line-height: 27px;
  text-align: left;
  color: ${({ theme }) => theme.colors.placeholder};
  ${({ theme }) => theme.device.tablet} {
    font-size: 16px;
  }
  ${({ theme }) => theme.device.default} {
    padding-top: 2px;
    padding-bottom: 32px;
    padding-left: 20px;
    font-size: 16px;
  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 20px;
  }
`;
