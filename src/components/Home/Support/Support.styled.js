import styled from 'styled-components';
import Container from '../../Container';

export const SupportSection = styled.section`
  padding-top: 20px;
  padding-bottom: 29px;
  background: ${({ theme }) => theme.colors.placeholder};
  
  ${({ theme }) => theme.device.default} {
    padding-top: 45px;
    padding-bottom: 45px;
    bottom: 0px;
  }
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title.semiBold};
  font-size: 25px;
  line-height: 1.43;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.device.tablet} {
    font-size: 30px;
  }
`;

export const SupportContainer = styled(Container)`
  margin: 0 auto;
  ${({ theme }) => theme.device.tablet} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  ${({ theme }) => theme.device.default} {
    margin: 0 auto;
  }
  ${({ theme }) => theme.device.desktop} {

  }
`;

export const Box = styled.div`
  margin-bottom: 30px;
  text-align: left;
  ${({ theme }) => theme.device.tablet} {
    margin-bottom: 0px;
    padding-right: 15px;
    width: 450px;
  }
  ${({ theme }) => theme.device.default} {
    width: 612px;
    padding-right: 15px;
  }
  ${({ theme }) => theme.device.desktop} {
    width: 759px;
    padding-right: 20px;
  }
`;
export const SupportUl =styled.ul`
  margin: 0 auto;
`
export const SupportLi = styled.li`
  margin-top: 20px;
  margin-bottom: 20px;
${({ theme }) => theme.device.tablet} {
  margin-bottom: 20px;
}
${({ theme }) => theme.device.default} {
  margin-bottom: 20px;
}
${({ theme }) => theme.device.desktop} {
  margin-bottom: 20px;
}
`
export const BoxIMG = styled.div`
  align-items: center;
  width: 200px;
  margin: 0 auto;
  ${({ theme }) => theme.device.tablet} {
    align-items: right;
    margin: 0;
    
  }
  ${({ theme }) => theme.device.default} {
    
  }
  ${({ theme }) => theme.device.desktop} {
    
  }
`;

export const Discription = styled.p`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 14px;
  line-height: 1.35;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.privacy_bg};
  ${({ theme }) => theme.device.tablet} {
    font-size: 16px;
  }
  ${({ theme }) => theme.device.default} {
    font-size: 16px;
  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 20px;
  }
`;
export const Discriptionltd = styled.p`
  padding-top: 46px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-weight: 400;
  font-size: 12px;
  line-height: 1.35;
  color: ${({ theme }) => theme.colors.privacy_bg};
  ${({ theme }) => theme.device.tablet} {
    
  }
  ${({ theme }) => theme.device.default} {

  }
  ${({ theme }) => theme.device.desktop} {

  }
`;

export const DiscriptionWithMargin = styled(Discription)`
  padding-bottom: 20px;
`;
