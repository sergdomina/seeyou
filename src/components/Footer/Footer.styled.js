import styled from 'styled-components';

export const FooterStyle = styled.footer`
  padding-top: 70px;
  background: ${({ theme }) => theme.colors.footer_bg};
`;

export const PolicyList = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  background: ${({ theme }) => theme.colors.black_btn};
`;

export const PolicyBox = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  background: ${({ theme }) => theme.colors.black_btn};
`;

export const Policylist = styled.ul`
  ${({ theme }) => theme.device.desktop} {
    display: flex;
  }
`;

export const PolicyItem = styled.li`
  position: relative;
  font-size: 20px;
  line-height: 2;
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.device.desktop} {
    font-size: 20px;
    line-height: 1.5;
    &:not(:last-child) {
      margin-right: 30px;
      &::after {
        content: '';
        display: block;
        position: absolute;
        right: -15px;
        top: 0;
        width: 2px;
        height: 100%;
        background-color: white;
      }
    }
  }
`;
