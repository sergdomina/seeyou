import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const DownloadLink = styled(NavLink)`
  font-family: ${({ theme }) => theme.fonts.descr.semiBold};
  padding: 15px 84px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.black_btn};
`;
export default DownloadLink;
