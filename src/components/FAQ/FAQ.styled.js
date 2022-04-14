import styled from 'styled-components';

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
  margin-bottom: 80px;
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
export const FAQSection = styled.section`
  padding-top: 40px;
  padding-bottom: 56px;
  ${({ theme }) => theme.device.desktop} {
    padding-top: 0px;
    padding-bottom: 55px;
  }
`;

export const FAQdiv =styled.div`
`
export const FAQul =styled.ul`
`
export const FAQli =styled.li`
  padding-top: 32px;
  padding-bottom: 40px;
`
export const Questions =styled.p`
  font-family: ${({ theme }) => theme.fonts.descr.bold};
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.black};
`
export const Answer =styled.p`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.placeholder};
`
export const PartnersDiv =styled.div`
  margin: 0 auto;
  padding-top: 40px;
  width: 611px;
`
export const PartnersUl=styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`
export const PartnersLi=styled.li`
padding: 0;
text-align: center;
margin-bottom: 32px;
&:not(:last-child) {
  margin-right: 24px;
}
`