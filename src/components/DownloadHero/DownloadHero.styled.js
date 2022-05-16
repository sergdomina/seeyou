import styled from 'styled-components';
import Container from '../Container';

export const Section = styled.section`
  padding-top: 76px;
  padding-bottom: 80px;
  ${({ theme }) => theme.device.tablet} {
    padding-top: 120px;
    padding-bottom: 100px;
  }
  ${({ theme }) => theme.device.default} {
    padding-top: 183px;
    padding-bottom: 123px;
  }
  ${({ theme }) => theme.device.desktop} {
    padding-top: 162px;
    padding-bottom: 100px;
  }
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title.semiBold};
  font-size: 30px;
  line-height: 1.5;
  margin-bottom: 16px;
  text-align: left;
  color: ${({ theme }) => theme.colors.black_btn};
  ${({ theme }) => theme.device.tablet} {
    margin-bottom: 16px;
    text-align: left;
  }
  ${({ theme }) => theme.device.default} {
    width: 160px;
    text-align: left;
  }
  ${({ theme }) => theme.device.desktop} {
    margin-top: 30px;
    font-size: 45px;
    line-height: 1.2;
    width: 240px;
  }
`;

export const DownloadMobileTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title.semiBold};
  font-size: 30px;
  line-height: 1.5;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.colors.black_btn};
  text-align: left;
  ${({ theme }) => theme.device.tablet} {
    margin-bottom: 16px;
    text-align: left;
  }

  ${({ theme }) => theme.device.desktop} {
    font-size: 45px;
    line-height: 1.2;
    text-align: left;
  }
`;

export const HeroThumb = styled.div`
  margin-bottom: 16px;
  ${({ theme }) => theme.device.tablet} {
    width: 300px;
    margin: 0 auto;
    margin-top: 32px;
  }
  ${({ theme }) => theme.device.default} {
    width: 724px;
    margin: 0;
  }
`;

export const HeroThumbMobile = styled(HeroThumb)`
  ${({ theme }) => theme.device.tablet} {
    width: 275px;
    margin: 0 auto;
    
  }

  ${({ theme }) => theme.device.default} {
    margin: 0;
  }

  ${({ theme }) => theme.device.desktop} {
    width: 573px;
    margin: 0;
  }
`;
export const HeroDiscription = styled.p`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 14px;
  line-height: 1.3;
  text-align: left;
  color: ${({ theme }) => theme.colors.black_btn};

  margin-bottom: 16px;
  ${({ theme }) => theme.device.tablet} {

    text-align: left;
  }
  ${({ theme }) => theme.device.default} {
    width: 344px;
    font-size: 16px;
    line-height: 1.3;
    text-align: left;
  }

  ${({ theme }) => theme.device.desktop} {
    width: 290px;
  }
`;

export const DownloadMobileDiscription = styled(HeroDiscription)`
  margin-bottom: 32px;
  text-align: left;
  ${({ theme }) => theme.device.tablet} {
    margin-bottom: 32px;
    text-align: left;
  }

  ${({ theme }) => theme.device.default} {
    margin-bottom: 32px;
    width: 405px;
    text-align: left;
  }

  ${({ theme }) => theme.device.desktop} {
    margin-bottom: 38px;
    width: 436px;
  }
`;

export const HeroContainer = styled(Container)`
  &:not(:last-child) {
    margin-bottom: 60px;
  }
  ${({ theme }) => theme.device.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* flex-direction: row-reverse; */
    &:not(:last-child) {
      flex-direction: row-reverse;
      margin-bottom: 80px;
      align-items: stretch;
    }
  }
  ${({ theme }) => theme.device.default} {
    
  }
  ${({ theme }) => theme.device.desktop} {
    &:not(:last-child) {
      margin-bottom: 206px;
    }
  }
`;

export const DownloadList = styled.ul`
  
  justify-content: center;
  ${({ theme }) => theme.device.tablet} {
    display: block;
  }
  ${({ theme }) => theme.device.default} {
    
  }
`;

export const DownloadMobileList = styled.ul`
  
  ${({ theme }) => theme.device.tablet} {
    display: flex;
  }
`;

export const DownloadItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 16px;  
  }
  ${({ theme }) => theme.device.tablet} {
   
  }
  ${({ theme }) => theme.device.default} {
    &:not(:last-child) {
      margin-bottom: 16px;
      margin-right: 0px;
    }
  }
`;

export const DownloadMobileItem = styled.li`

  &:not(:last-child) {
    margin-bottom: 32px;
  }
  ${({ theme }) => theme.device.tablet} {
    &:not(:last-child) {
      margin-bottom: 0px;
      margin-right: 24px;
    }
  }

  ${({ theme }) => theme.device.desktop} {
    &:not(:last-child) {
      margin-right: 48px;
    }
  }
`;

export const Link = styled.a`
  display: inline-block;
  width: 245px;
  font-family: ${({ theme }) => theme.fonts.descr.semiBold};
  padding: 14px 0;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  line-height: 1.25;

  background: ${({ theme }) => theme.colors.primary};

  ${({ theme }) => theme.device.default} {
    text-align: center;
  }
`;

export const DownloadMobileLink = styled.a`
  display: block;
  width: 190px;
  margin: 0 auto;
  ${({ theme }) => theme.device.tablet} {
    width: 140px;
  }

  ${({ theme }) => theme.device.desktop} {
    
  }
`;

export const GlobalBox = styled.div`
  text-align: center;
  padding-left: 8px;
  padding-right: 8px;
  ${({ theme }) => theme.device.tablet} {
    width: 310px;
    padding-left: 0px;
    padding-right: 0px;
    text-align: left;
  }
  ${({ theme }) => theme.device.default} {
    width: 416px;
    text-align: left;
    /* padding-right: 5px; */
  }
  ${({ theme }) => theme.device.desktop} {
    width: 500px;
    text-align: left;
    /* padding-right: 10px; */
  } ;
`;
