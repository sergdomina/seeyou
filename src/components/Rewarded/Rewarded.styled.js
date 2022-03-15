import styled from "styled-components";

export const RewardedTitle = styled.h1`
font-weight: 600;
font-size: 30px;
line-height: 1,5px;
text-align: center;
margin-bottom: 16px;
color: ${({ theme }) => theme.colors.black};
`;

export const RewardedThumb = styled.div`
width: 271px;
height: 238px;
border-radius: 13px;
margin: 0 auto;
margin-bottom: 40px;
background: ${({ theme }) => theme.colors.blue};
`;
export const RewardedDiscription= styled.p`
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 150%;
text-align: center;

color: ${({ theme }) => theme.colors.primaryText};
`;
