import styled from 'styled-components';

export const PopLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.descr.regular};
  color: ${({ theme }) => theme.colors.dark};
  font-size: 14px;
  line-height: 1.5;
  margin-left: 15px;
  &.active {
    font-family: ${({ theme }) => theme.fonts.descr.bold};
  }
  ${({ theme }) => theme.device.tablet} {
    font-size: 14px;
    margin-left: 15px;
  }
`;

export const PopButton = styled.button`
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
export const PopupBox = styled.div`
  width: 239px;
  height: 84px;
  background: #fff;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
