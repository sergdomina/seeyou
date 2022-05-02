import styled from 'styled-components';

export const Section = styled.section`
  padding: 80px 0px 100px;
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
  font-family: ${({ theme }) => theme.fonts.title.semiBold};
  font-size: 45px;
  line-height: 1.22;

  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.black_btn};
`;

export const Discription = styled.p`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 20px;
  line-height: 1.35;
  color: ${({ theme }) => theme.colors.black_btn};

  ${({ theme }) => theme.device.desktop} {
  }
`;

export const DiscriptionWithMargin = styled(Discription)`
  margin-bottom: 27px;
`;

export const ConferenceItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 30px;
    ${({ theme }) => theme.device.desktop} {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 208px;
    }
  }
  ${({ theme }) => theme.device.desktop} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:nth-child(2n + 1) {
      flex-direction: row-reverse;
    }
  }
`;

export const DiscriptionList = styled.ul`
  list-style-type: disc;
  padding-left: 27px;
`;

export const BoxBeforEnd = styled.div`
  /* width: 476px; */
  margin: 0 auto;
  margin-bottom: 102px;
`;
