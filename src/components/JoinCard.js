import React from 'react';
import styled from 'styled-components';
import { FaDiscord } from 'react-icons/fa';

import logo from '../images/ideax_x_only.svg';

const JoinCardContainer = styled.div`
  background: linear-gradient(135deg, rgba(11, 15, 51, 0.5), rgba(30, 27, 75, 0.5));
  border: 1px solid rgba(128, 90, 213, 0.4);
  border-radius: 20px;
  padding: 2rem;
  max-width: 400px;
  margin: 0 auto;
  color: white;
  box-shadow: 0 0 30px rgba(128, 90, 213, 0.1);

  @media screen and (max-width: 480px) {
    padding: 1.5rem 1rem;
    width: 95%; /* slightly more padding on tiny screens */
  }
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.8rem;
  margin-bottom: 1.5rem;
`;

const Logo = styled.img`
  width: 68px;
  height: 68px;
  object-fit: contain;
  margin-left: 0.25rem;
`;

const TitleText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align:left;
`;

const Line1 = styled.span`
  font-size: 2.8rem;
  font-weight: bolder;
  line-height: 1.4;

    @media screen and (max-width: 480px) {
    font-size: 2rem; 
  }
`;

const Line = styled.span`
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.4;

  &:nth-child(2) {
    font-size: 2.2rem;
  }

  &:nth-child(3) {
    font-size: 1.6rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin: 1.5rem 0;
`;

const StyledButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.08);
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  font-weight: 500;
  text-decoration: none;
  backdrop-filter: blur(6px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: scale(1.05);
    box-shadow: 0 0 12px rgba(168, 139, 250, 0.4);
  }
`;

const Subtext = styled.p`
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  color: #c4b5fd;
  letter-spacing: 0.5px;
  margin-top: 1rem;
  text-shadow: 0 0 4px rgba(167, 139, 250, 0.4);

  animation: fadeGlow 3s ease-in-out infinite alternate;

  @keyframes fadeGlow {
    0% {
      opacity: 0.7;
      text-shadow: 0 0 2px rgba(167, 139, 250, 0.3);
    }
    100% {
      opacity: 1;
      text-shadow: 0 0 8px rgba(167, 139, 250, 0.6);
    }
  }
`;


const StyledDate = styled.div`
  font-size: 1.15rem;
  font-weight: 600;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, #e9d5ff, #c084fc, #a78bfa);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 2s ease-in-out infinite;
  text-shadow: 0 0 6px rgba(167, 139, 250, 0.6);

  letter-spacing: 1px;
  margin-bottom: 1.5rem;

  @keyframes shimmer {
    0% {
      background-position: 200% center;
    }
    50% {
      background-position: 100% center;
    }
    100% {
      background-position: 0% center;
    }
  }
`;

const JoinCard = () => {
  return (
    <JoinCardContainer>

      <StyledDate>Starting: 31st Oct, 2025</StyledDate>
      <TitleRow>
        <Logo src={logo} alt="Logo" />
        <TitleText>
          <Line1>MBMC</Line1>
          <Line>IdeaX 2025</Line>
        </TitleText>
      </TitleRow>

      <ButtonWrapper>
        <StyledButton
          href="https://docs.google.com/forms/d/1pfQsNEHA0f8Abr9h_YHXYQ8YSaEFfGzWXBqN8hPtJ7g/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Register Now
        </StyledButton>

        <StyledButton
          href="https://discord.gg/87yBYfhVTY"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDiscord />
          Join Our Discord
        </StyledButton>
      </ButtonWrapper>

      <Subtext>Innovation begins with you !</Subtext>
    </JoinCardContainer>
  );
};

export default JoinCard;
