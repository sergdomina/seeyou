import styled from 'styled-components';
import Container from '../Container';

export const Section = styled.section`
  padding-top: 76px;
  padding-bottom: 80px;
  ${({ theme }) => theme.device.tablet} {
    padding-top: 183px;
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
  color: ${({ theme }) => theme.colors.black_btn};
  ${({ theme }) => theme.device.default} {
    width: 160px;
  }
  ${({ theme }) => theme.device.desktop} {
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

  ${({ theme }) => theme.device.tablet} {
    margin-bottom: 16px;
  }

  ${({ theme }) => theme.device.desktop} {
    font-size: 45px;
    line-height: 1.2;
  }
`;

export const HeroThumb = styled.div`
  margin-bottom: 16px;
  ${({ theme }) => theme.device.tablet} {
    width: 438px;
    margin: 0 auto;
    margin-bottom: 40px;
  }
  ${({ theme }) => theme.device.default} {
    width: 724px;
    margin: 0;
  }
`;

export const HeroThumbMobile = styled(HeroThumb)`
  ${({ theme }) => theme.device.tablet} {
    width: 383px;
    margin: 0 auto;
    margin-bottom: 40px;
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

  color: ${({ theme }) => theme.colors.black_btn};

  margin-bottom: 16px;

  ${({ theme }) => theme.device.default} {
    width: 344px;
    font-size: 16px;
    line-height: 1.3;
  }

  ${({ theme }) => theme.device.desktop} {
    width: 290px;
  }
`;

export const DownloadMobileDiscription = styled(HeroDiscription)`
  margin-bottom: 32px;
  ${({ theme }) => theme.device.tablet} {
    margin-bottom: 16px;
  }

  ${({ theme }) => theme.device.default} {
    margin-bottom: 32px;
    width: 405px;
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
    &:not(:last-child) {
      margin-bottom: 70px;
    }
  }
  ${({ theme }) => theme.device.default} {
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
  ${({ theme }) => theme.device.desktop} {
    &:not(:last-child) {
      margin-bottom: 206px;
    }
  }
`;

export const DownloadList = styled.ul`
  ${({ theme }) => theme.device.tablet} {
    display: flex;
    justify-content: center;
  }
  ${({ theme }) => theme.device.default} {
    display: block;
  }
`;

export const DownloadMobileList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.device.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export const DownloadItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  ${({ theme }) => theme.device.tablet} {
    &:not(:last-child) {
      margin-bottom: 0px;
      margin-right: 16px;
    }
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
export const HeroBox = styled.div`
  text-align: center;

  ${({ theme }) => theme.device.desktop} {
    width: 376px;
    text-align: left;
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

  ${({ theme }) => theme.device.tablet} {
    width: 180px;
  }

  ${({ theme }) => theme.device.desktop} {
    width: 190px;
  }
`;

export const GlobalBox = styled.div`
  text-align: center;
  ${({ theme }) => theme.device.tablet} {
    /* width: 618px; */
    margin: 0 auto;
    text-align: center;
  }
  ${({ theme }) => theme.device.default} {
    /* width: 416px; */
    text-align: left;
    /* padding-right: 5px; */
  }
  ${({ theme }) => theme.device.desktop} {
    /* width: 570px; */
    text-align: left;
    /* padding-right: 10px; */
  } ;
`;
