import styled from "styled-components";

export const SupportTitle = styled.h1`
font-family: 'Jost';
font-weight: 600;
font-size: 30px;
line-height: 1,5px;
text-align: center;
margin-bottom: 16px;
color: ${({ theme }) => theme.colors.black};
`;

export const SupportThumb = styled.div`
width: 271px;
height: 238px;
border-radius: 13px;
margin: 0 auto;
margin-bottom: 40px;
background: ${({ theme }) => theme.colors.blue};
`;
export const SupportDiscription= styled.p`
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 150%;
text-align: center;

color: ${({ theme }) => theme.colors.primaryText};
`;
