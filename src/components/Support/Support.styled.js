import styled from 'styled-components';

export const SupportSection = styled.section`
  padding-top: 101px;
  padding-bottom: 88px;
  background: ${({ theme }) => theme.colors.blue};
`;

export const SupportTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  font-size: 30px;
  line-height: 1.5;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.black};
`;

export const SupportContainer = styled.div`
  text-align: center;
  ${({ theme }) => theme.device.desktop} {
    width: 380px;
    text-align: left;
  }
`;
export const SupportDiscription = styled.p`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 14px;
  line-height: 1.5;

  color: ${({ theme }) => theme.colors.primaryText};
`;
