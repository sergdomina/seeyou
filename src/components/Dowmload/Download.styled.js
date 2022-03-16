import styled from 'styled-components';

export const DownloadLink = styled.a`
  font-family: 'Poppins_SemiBold';
  padding: 15px 84px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.black_btn};
`;
export const DownloadLinkBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  transform: translateX(-50%);
  left: 50%;
  padding-top: 8px;
  padding-bottom: 34px;
  text-align: 'center';
  position: fixed;
  bottom: 0;
  background: ${({ theme }) => theme.colors.white};
`;
