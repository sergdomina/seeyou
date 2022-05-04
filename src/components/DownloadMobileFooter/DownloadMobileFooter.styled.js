import styled from 'styled-components';
export const DownloadLinkBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  transform: translateX(-50%);
  left: 50%;
  padding-top: 30px;
  padding-bottom: 34px;
  text-align: 'center';
  position: fixed;
  bottom: 0;
  box-shadow: 2px 0px 8px rgba(0, 0, 0, 0.25);
  background: ${({ theme }) => theme.colors.white};
  /* z-index: 1; */
`;
