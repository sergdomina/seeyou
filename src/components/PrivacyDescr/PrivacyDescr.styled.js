import styled from 'styled-components';

export const PrivacySection = styled.section`
  padding-top: 80px;
  padding-bottom: 68px;
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title.semiBold};
  font-size: 40px;
  line-height: 1.45;

  color: ${({ theme }) => theme.colors.black_btn};

  margin-bottom: 27px;
`;

export const Discription = styled.p`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 20px;
  line-height: 1.35;

  color: ${({ theme }) => theme.colors.black_btn};
  margin-bottom: 43px;
`;
export const DiscriptionList = styled.ul`
  list-style-type: disc;
  padding-left: 35px;
  margin-bottom: 43px;
`;

export const DiscriptionItem = styled.li`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 20px;
  line-height: 1.35;

  color: ${({ theme }) => theme.colors.black_btn};
`;

export const LinkToList = styled.a`
  color: ${({ theme }) => theme.colors.link};
`;

export const DiscriptionSubtitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.descr.bold};
  font-size: 20px;
  line-height: 1.35;

  color: ${({ theme }) => theme.colors.black_btn};
`;
// export const ConferenceItem = styled.li`
//   &:not(:last-child) {
//     margin-bottom: 30px;
//     ${({ theme }) => theme.device.desktop} {
//       display: flex;
//       align-items: center;
//       justify-content: space-between;
//       margin-bottom: 150px;
//     }
//   }
//   ${({ theme }) => theme.device.desktop} {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     &:nth-child(2n) {
//       flex-direction: row-reverse;
//     }
//   }
// `;
