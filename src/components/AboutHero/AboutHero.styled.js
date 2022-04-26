import styled from 'styled-components';

export const ConferenceTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 1.2;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.device.tablet} {
    font-size: 30px;
  }
  ${({ theme }) => theme.device.default} {
    font-size: 30px;
  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 45px;
    
  }
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  font-size: 30px;
  line-height: 1,2;
  text-align: center;
  margin-top: 32px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.device.tablet} {
    font-size: 35px;
  }
  ${({ theme }) => theme.device.default} {
    font-size: 35px;
  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 45px;
  }
`;
export const SectionTitleSub = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title.semiBold};
  font-weight: 600;
  font-size: 14px;
  line-height: 1,4;
  text-align: center;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.device.tablet} {
    font-size: 25px;
    margin-bottom: 41px;
  }
  ${({ theme }) => theme.device.default} {
    font-size: 25px;
    margin-bottom: 100px;
  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 30px;
    margin-bottom: 128px;
  }
`;
export const AboutUl = styled.ul`
  padding-bottom: 44px;
  ${({ theme }) => theme.device.tablet} {
    padding-bottom: 120px;
  }
  ${({ theme }) => theme.device.default} {
    padding-bottom: 120px;
  }
  ${({ theme }) => theme.device.desktop} {
    padding-bottom: 150px;
  }
`

export const ConferenceDiscription = styled.p`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 14px;
  line-height: 1,35;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: 20px;
  ${({ theme }) => theme.device.tablet} {
    font-size: 16px;
  }
  ${({ theme }) => theme.device.default} {
    font-size: 16px;
  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 20px;
    margin-bottom: 30px;
  }
`;
export const ContactLink = styled.a`
font-family: ${({ theme }) => theme.fonts.descr.regular};
font-size: 14px;
line-height: 1,35;
text-decoration-line: underline;

color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: 20px;
  ${({ theme }) => theme.device.tablet} {
    font-size: 16px;
  }
  ${({ theme }) => theme.device.default} {
    font-size: 16px;
  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 20px;
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
    margin-bottom: 30px;
    align-items: center;
    
    ${({ theme }) => theme.device.tablet} {
      margin-bottom: 75px;
    }
    ${({ theme }) => theme.device.default} {
      margin-bottom: 90px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &:nth-child(2n) {
      flex-direction: row-reverse;
    }
    }
    ${({ theme }) => theme.device.desktop} {
      margin-bottom: 120px;
      
    }
`;

export const Image = styled.img`
  margin: 0 auto;
  transform: scale(60%);
  ${({ theme }) => theme.device.tablet} {
    transform: scale(60%);
  }
  ${({ theme }) => theme.device.default} {
    transform: scale(66%);
  }
  ${({ theme }) => theme.device.desktop} {
    transform: scale(100%);
  }
`
