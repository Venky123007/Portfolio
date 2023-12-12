import React from 'react'
import styled from 'styled-components';


const ResumeDiv = styled.div`
background-color: ${({ theme }) => theme.card_light};
display: flex;
justify-content: start;
position: relative;
padding: 80px 125px;

@media screen and (max-width: 960px) {
  padding: 66px 16px;
}

@media screen and (max-width: 640px) {
  padding: 32px 16px;
}

z-index: 1;
clip-path: polygon(0 0, 100% 0, 100% 100%, 60% 85%, 0 100%);
`;

const ResumeButton = styled.a`
  display: inline-block;
  text-decoration: none;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  color: ${({ theme }) => theme.white};
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  box-shadow: 20px 20px 60px #1F2634, -20px -20px 60px #1F2634;
  transition: transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 20px 20px 60px #1F2634, -20px -20px 60px #1F2634;
  }

  @media (max-width: 640px) {
    padding: 12px;
    font-size: 18px;
  }
`;


const Resume = () => {
  return (
    <ResumeDiv>
        <ResumeButton href="https://drive.google.com/file/d/1pKwtGrAtiS8MJPtqM8pW9O6ffMfbjqA_/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Check Resume</ResumeButton>
    </ResumeDiv>
  )
}

export default Resume;