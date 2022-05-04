import styled from 'styled-components';

export const Section = styled.section`
padding: 30px 0px 40px;
  ${({ theme }) => theme.device.tablet} {
    padding: 40px 0px 60px;
  }
  ${({ theme }) => theme.device.default} {
    padding: 50px 0px 70px;
  }
  ${({ theme }) => theme.device.desktop} {
    padding: 60px 0px 100px;
  }
`;

export const HiddenTitle = styled.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const DiscriptionSub = styled.h3`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 12px;
  line-height: 1.22;

  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.black_btn};
`;
export const SubTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  font-size: 25px;
  line-height: 1.2;
  margin-bottom: 32px;
  margin-top: 32px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black_btn};
  ${({ theme }) => theme.device.tablet} {
    font-size: 35px;
  }
  ${({ theme }) => theme.device.default} {
    text-align: left;
    font-size: 30px;
    margin-bottom: 32px;

  }
  ${({ theme }) => theme.device.desktop} {
    font-size: 45px;
    margin-bottom: 32px;
  }
`;

export const Discription = styled.p`
font-family: ${({ theme }) => theme.fonts.descr.regular};
font-size: 14px;
line-height: 1.35;
color: ${({ theme }) => theme.colors.primaryText};
margin-bottom: 32px;
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

export const DiscriptionWithMargin = styled(Discription)`
  margin-bottom: 27px;
`;

export const ConferenceItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 30px;
  }
  ${({ theme }) => theme.device.default} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    &:nth-child(2n + 1) {
      flex-direction: row-reverse;
    }
  }
  ${({ theme }) => theme.device.desktop} {

  }
`;

export const DiscriptionList = styled.ul`
  list-style-type: disc;
  padding-left: 27px;
`;

export const BoxBeforEnd = styled.div`

  margin: 0 auto;
  margin-bottom: 102px;
`;
