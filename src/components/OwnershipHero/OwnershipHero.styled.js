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
  margin-top: 150px;
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
export const OwnerUl = styled.ul`
  padding-bottom: 20px;
  ${({ theme }) => theme.device.tablet} {
    padding-bottom: 60px;
  }
  ${({ theme }) => theme.device.default} {
    padding-bottom: 60px;
  }
  ${({ theme }) => theme.device.desktop} {
    padding-bottom: 75px;
  }
`
export const ConferenceItem = styled.li`
  margin-bottom: 15px;
  align-items: center;
  display: flex;
  flex-direction: column-reverse;
  ${({ theme }) => theme.device.tablet} {
    margin-bottom: 35px;
  }
  ${({ theme }) => theme.device.default} {
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    &:nth-child(2n) {
    flex-direction: row-reverse;
    }
  }
  ${({ theme }) => theme.device.desktop} {
    margin-bottom: 70px;
    
  }
`;
export const Image = styled.img`
  margin: 0 auto;
  
  ${({ theme }) => theme.device.tablet} {
    transform: scale(66%);
  }
  ${({ theme }) => theme.device.default} {
    transform: scale(100%);
  }
  ${({ theme }) => theme.device.desktop} {
    
  }
`