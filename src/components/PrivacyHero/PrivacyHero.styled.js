import styled from 'styled-components';

export const HeroPrivacySection = styled.section`
  padding-top: 36px;
  padding-bottom: 45px;
  background: ${({ theme }) => theme.colors.privacy_bg};
`;

export const SectionTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.title.semiBold};
  font-size: 50px;
  line-height: 1.44;
  color: ${({ theme }) => theme.colors.dark};
  text-align: center;
`;

export const ConferenceDiscription = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
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
