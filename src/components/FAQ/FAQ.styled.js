import styled from 'styled-components';

export const FAQSection = styled.section`
  padding-top: 70px;
  padding-bottom: 56px;
  ${({ theme }) => theme.device.desktop} {
  }
  ${({ theme }) => theme.device.tablet} {

  }
  ${({ theme }) => theme.device.default} {

  }
  ${({ theme }) => theme.device.desktop} {
    
  }
`;


export const ContainerFAQ = styled.div`
    margin: 0 auto;
    width: 343px;

    ${({ theme }) => theme.device.tablet}{
    width: 618px;
  }

  ${({ theme }) => theme.device.default} {
    padding: 0 24px;
    width: 830px;
  }
  ${({ theme }) => theme.device.desktop} {
    width: 1140px;
    
  }
`

export const SectionTitle = styled.h2`
font-family: ${({ theme }) => theme.fonts.title.bold};
font-size: 30px;
line-height: 1,2;
text-align: center;
padding-top: 50px;
margin-bottom: 8px;
color: ${({ theme }) => theme.colors.black};
${({ theme }) => theme.device.tablet} {
  font-size: 35px;
  padding-top: 80px;
}
${({ theme }) => theme.device.default} {
  font-size: 35px;
  padding-top: 100px;
}
${({ theme }) => theme.device.desktop} {
  font-size: 45px;
  padding-top: 132px;
}
`;


export const SectionTitleSub = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title.regular};
  font-size: 14px;
  line-height: 1,4;
  text-align: center;
  padding-bottom: 40px;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.device.tablet} {
    font-size: 16px;
    padding-bottom: 60px;
  }
  ${({ theme }) => theme.device.default} {
    font-size: 16px;
    padding-bottom: 70px;
  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 20px;
    padding-bottom: 90px;
  }
`;


export const FAQdiv =styled.div`
margin: 0 auto;

`
export const FAQul =styled.ul`

`
export const FAQli =styled.li`
  width: 343;
  padding-top: 24px;
  padding-bottom: 24px;
  ${({ theme }) => theme.device.tablet} {
    padding-top: 28px;
    padding-bottom: 34px;
  }
  ${({ theme }) => theme.device.default} {
    padding-top: 32px;
    padding-bottom: 40px;
  }
  ${({ theme }) => theme.device.desktop} {
    
  }
`

export const Questions =styled.p`
  font-family: ${({ theme }) => theme.fonts.descr.bold};
  font-size: 14px;
  line-height: 1.35;
  text-align: center;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.device.tablet} {
    font-size: 16px;
  }
  ${({ theme }) => theme.device.default} {
    font-size: 16px;
  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 20px;
  }
`
export const Answer =styled.p`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 14px;
  line-height: 27px;
  text-align: center;
  color: ${({ theme }) => theme.colors.placeholder};
  ${({ theme }) => theme.device.tablet} {
    font-size: 16px;

  }
  ${({ theme }) => theme.device.default} {
    font-size: 16px;
  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 20px;
  }
`
export const PartnersDiv =styled.div`
  margin: 0 auto;
  padding-top: 40px;
  width: 343px;
  ${({ theme }) => theme.device.tablet} {
    width: 611px;
  }
  ${({ theme }) => theme.device.default} {
    
  }
  ${({ theme }) => theme.device.desktop} {
    
  }
`
export const PartnersUl=styled.ul`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: auto;
  ${({ theme }) => theme.device.tablet} {
    width: auto;
  }
  ${({ theme }) => theme.device.default} {
    
  }
  ${({ theme }) => theme.device.desktop} {
    
  }
`
export const PartnersLi=styled.li`
padding: 0;
margin-bottom: 24px;
margin-right: 12px;
margin-left: 12px;
${({ theme }) => theme.device.tablet} {
  margin-bottom: 32px;
&:not(:last-child) {
  margin-right: 24px;
}
}
${({ theme }) => theme.device.default} {
  
}
${({ theme }) => theme.device.desktop} {
  
}
`