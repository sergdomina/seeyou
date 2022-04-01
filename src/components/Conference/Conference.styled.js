import styled from 'styled-components';

export const ConferenceTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.title.bold};
  font-size: 30px;
  line-height: 1.5;

  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.black};
`;

export const SectionTitle = styled.h2`
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

export const ConferenceDiscription = styled.p`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: 20px;
  ${({ theme }) => theme.device.desktop} {
    margin-bottom: 30px;
  }
`;
export const ConfImg = styled.img`

${({ theme }) => theme.device.desktop} {
  margin: 0;
}
`;
export const ConferenceItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 30px;
    ${({ theme }) => theme.device.desktop} {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 150px;
    }
  }
  ${({ theme }) => theme.device.desktop} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:nth-child(2n) {
      flex-direction: row-reverse;
    }
  }
`;
