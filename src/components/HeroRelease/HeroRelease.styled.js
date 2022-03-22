import styled from 'styled-components';

export const HelpSection = styled.div`
  padding-top: 62px;
  padding-bottom: 67px;
  background: ${({ theme }) => theme.colors.blue};
  ${({ theme }) => theme.device.desktop} {
    padding-top: 90px;
    padding-bottom: 84px;
  }
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  font-size: 30px;
  line-height: 1.4;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.device.desktop} {
    font-size: 24px;
    line-height: 1.5;
  }
`;
