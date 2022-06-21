import styled from 'styled-components';
import Container from '../../Container';

export const Section = styled.section`
  padding: 30px 0px 40px;
  ${({ theme }) => theme.device.tablet} {
    padding: 40px 0px 40px;
  }
  ${({ theme }) => theme.device.default} {
    padding: 50px 0px 50px;
  }
  ${({ theme }) => theme.device.desktop} {
    padding: 60px 0px 70px;
  }
`;

export const ToolbarContainer = styled(Container)`

  ${({ theme }) => theme.device.tablet} {
    display: flex;
    align-items: start;
    justify-content: space-between;
    width: 608px;
  }
  ${({ theme }) => theme.device.default} {
   
    width: 805px;
    align-items: top;
    margin-bottom: 40px
  }
  ${({ theme }) => theme.device.desktop} {
    width: 1140px;
  }
`;
export const Tool = styled.img`

  ${({ theme }) => theme.device.tablet} {

  }
  ${({ theme }) => theme.device.default} {
   
   
  }
  ${({ theme }) => theme.device.desktop} {
    
  }
`;

export const DivImage = styled.div`
  margin: 0 auto;
  width: 185px;
  height: 146px;
  
  ${({ theme }) => theme.device.tablet} {
    width: 200px;
    height: 178px;
    margin-left: 0;
  }
  ${({ theme }) => theme.device.default} {
    width: 270px;
    height: 233px;
  }
  ${({ theme }) => theme.device.desktop} {
    width: 311px;

  }
`;
export const Img = styled.img`
  margin: 0 auto;
  width: 185px;
  height: 146px;

  ${({ theme }) => theme.device.tablet} {
    margin-left: 0;
  }

  ${({ theme }) => theme.device.default} {
    width: 208px;
    height: 136px;
  }
  ${({ theme }) => theme.device.desktop} {
    width: 311px;
    height: 204px;
  }
`;

export const Box = styled.div`
  padding-right: 8px;
  padding-left: 8px;
  ${({ theme }) => theme.device.tablet} {
    width: 369px;
    padding-right: 0px;
    padding-left: 0px;
  }
  ${({ theme }) => theme.device.default} {
    width: 538px;
    margin-top: 0;
  }
  ${({ theme }) => theme.device.desktop} {
    width: 663px;
  }
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  font-size: 25px;
  line-height: 1.2;
  margin-bottom: 32px;
  margin-top: 32px;
  text-align: left;
  color: ${({ theme }) => theme.colors.black_btn};
  ${({ theme }) => theme.device.tablet} {
    font-size: 26px;

  }
  ${({ theme }) => theme.device.default} {
    text-align: left;
    font-size: 30px;
    margin-top: 5px;
  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 45px;
  }
`;

export const Discription = styled.p`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 14px;
  line-height: 1.35;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: 32px;
  text-align: left;
  ${({ theme }) => theme.device.tablet} {
    font-size: 14px;

  }
  ${({ theme }) => theme.device.default} {
    font-size: 16px;
    text-align: left;
  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 20px;
  }
`;

export const ToolbarThumb = styled.div`
  margin: 0 auto;
  margin-top: 63px;
  width: auto;
  box-shadow: 0px 15px 20px rgba(112, 88, 255, 0.16);
  border-radius: 6px;
  ${({ theme }) => theme.device.mobileMax} {
    /* width: 618px; */
    /* max-width: 578px; */
    overflow-x: scroll;

    & Tool {
      /* overflow-x: scroll; */
      max-width: 578px;
    }
  }
  
  ${({ theme }) => theme.device.tablet} {
    margin-top: 0px;
    width: 600px;
    box-shadow: 0px 30px 37px rgba(112, 88, 255, 0.16);
    border-radius: 12px;
  }
  ${({ theme }) => theme.device.default} {
    width: 634px;
  }
  ${({ theme }) => theme.device.desktop} {
    width: 778px;
  }
`;
