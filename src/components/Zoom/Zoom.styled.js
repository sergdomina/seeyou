import styled from 'styled-components';

export const Section = styled.section`
padding: 50px 0px 60px;
  ${({ theme }) => theme.device.tablet} {
    padding: 80px 0px 60px;
    
  }
  ${({ theme }) => theme.device.default} {
    padding: 80px 0px 70px;
  }
  ${({ theme }) => theme.device.desktop} {
    padding: 80px 0px 100px;
  }
`;


export const Title = styled.h1`
font-family: ${({ theme }) => theme.fonts.title.bold};
font-size: 25px;
line-height: 1.2;
margin-bottom: 32px;
margin-top: 32px;
color: ${({ theme }) => theme.colors.black_btn};
${({ theme }) => theme.device.tablet} {
  font-size: 26px;
}
${({ theme }) => theme.device.default} {
  font-size: 30px;
  margin-bottom: 32px;
  margin-top: 100px;
}
${({ theme }) => theme.device.desktop} {
  font-size: 45px;
  margin-bottom: 32px;
  margin-top: 120px;
}
`;

export const Discription = styled.p`
font-family: ${({ theme }) => theme.fonts.descr.regular};
font-size: 16px;
line-height: 1.35;
color: ${({ theme }) => theme.colors.primaryText};
margin-bottom: 32px;
${({ theme }) => theme.device.tablet} {
  
}
${({ theme }) => theme.device.default} {
  
  margin-bottom: 40px;
}
${({ theme }) => theme.device.desktop} {
  
  
}
`;

export const Link = styled.a`
    margin-left: auto;
    margin-right: auto;
    font-family: ${({ theme }) => theme.fonts.descr.semiBold};
    font-size: 16px;
    padding: 14px 24px;
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.primary};
    ${({ theme }) => theme.device.tablet} {
        padding: 14px 38px;
    }
    ${({ theme }) => theme.device.default} {
 
    }
    ${({ theme }) => theme.device.desktop} {
        
  }
`;
export const ButDiv=styled.div`
width: 100%;
  text-align: center;
${({ theme }) => theme.device.tablet} {
  text-align: left;

}
${({ theme }) => theme.device.default} {

}
${({ theme }) => theme.device.desktop} {

} ;
`


export const GlobalBox = styled.div`
  width: auto;
  
  padding-right: 8px;
  padding-left: 8px;
  
  ${({ theme }) => theme.device.tablet} {
    margin: 0 auto;
    width: 412px;
    text-align: left;
    padding-right: 10px;
    padding-left: 10px;
  }
  ${({ theme }) => theme.device.default} {
    width: 554px;
    
    padding-right: 20px;
  }
  ${({ theme }) => theme.device.desktop} {
    width: 764px;
    text-align: left;
    padding-right: 30px;
  } ;
`;
