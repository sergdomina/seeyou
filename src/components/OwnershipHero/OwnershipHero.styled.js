import styled from 'styled-components';

export const ConferenceTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  font-style: normal;
  font-weight: 600;
  font-size: 45px;
  line-height: 1.2;

  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.black};
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  font-weight: 600;
  font-size: 45px;
  line-height: 1,2;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.black};
`;
export const SectionTitleSub = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title.regular};
  font-size: 20px;
  line-height: 1,4;
  text-align: center;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.black};
`;
export const SectionTitleSmall = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title.regular};
  font-size: 12px;
  line-height: 1,3;
  text-align: center;
  margin-bottom: 128px;
  color: ${({ theme }) => theme.colors.black};
`;

export const ConferenceDiscription = styled.p`
font-family: ${({ theme }) => theme.fonts.descr.regular};
font-size: 20px;
line-height: 1,35;
color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: 20px;
  ${({ theme }) => theme.device.desktop} {
    margin-bottom: 30px;
  }
`;
export const ConferenceDiscriptionSub = styled.p`
font-family: ${({ theme }) => theme.fonts.descr.regular};
font-size: 12px;
line-height: 1,35;
color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: 20px;
  ${({ theme }) => theme.device.desktop} {
    margin-bottom: 30px;
  }
`;

export const ConferenceItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 30px;
    ${({ theme }) => theme.device.desktop} {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 150px;
    }
  }
  ${({ theme }) => theme.device.desktop} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:nth-child(2n) {
      flex-direction: row-reverse;
    }
  }
`;
