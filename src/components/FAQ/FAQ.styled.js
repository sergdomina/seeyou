import styled from 'styled-components';

export const FAQSection = styled.section`
  padding-top: 40px;
  padding-bottom: 56px;
  ${({ theme }) => theme.device.desktop} {
    padding-top: 10px;
    padding-bottom: 130px;
  }
`;
export const FAQTitle = styled.h2`
  font-size: 40px;
  line-height: 1.35;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 40px;
  ${({ theme }) => theme.device.desktop} {
    margin-bottom: 87px;
  }
`;

export const FAQItem = styled.li`
  ${({ theme }) => theme.device.mobileMax} {
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

export const FAQList = styled.ul`
  ${({ theme }) => theme.device.desktop} {
    display: flex;
    justify-content: space-between;
  }
`;
