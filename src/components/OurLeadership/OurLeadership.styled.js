import styled from 'styled-components';

export const SectionTitle = styled.h2`
font-family: ${({ theme }) => theme.fonts.title.bold};
  font-weight: 600;
  font-size: 45px;
  line-height: 1,2;
  text-align: center;
  margin-top: 0;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.black};
`;
export const SectionTitleSub = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title.semibold};
  font-weight: 600;
  font-size: 30px;
  line-height: 1,4;
  text-align: center;
  margin-bottom: 45px;
  color: ${({ theme }) => theme.colors.orange};
`;

export const OurDiscription = styled.p`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 20px;
  line-height: 1,35;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: 20px;
  ${({ theme }) => theme.device.desktop} {
    margin-bottom: 40px;
  }
`;

export const Light = styled.span`
  font-family: ${({ theme }) => theme.fonts.descr.bold};
  font-size: 20px;
  line-height: 1,35;
  color: ${({ theme }) => theme.colors.orange};
  margin-bottom: 20px;
  ${({ theme }) => theme.device.desktop} {
  margin-bottom: 30px;
  }
`