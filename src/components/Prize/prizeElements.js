import styled from "styled-components";

export const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
  color: white;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  height: auto;
  padding: 2rem 0;
  align-content: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  @media (max-width: 480px) {
    gap: 20px;
    padding: 1rem 0;
  }
`;

export const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  border-radius: 20px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #013f6a, #0e4e7b);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem;
  align-items: center;
`;

export const FlipCard = styled.div`
  perspective: 1000px;
  width: 100%;
  height: 300px;
  cursor: pointer;

  &:hover ${CardInner} {
    transform: rotateY(180deg);
  }

  @media (max-width: 900px) {
    height: 350px;
  }
  @media (max-width: 480px) {
    height: 300px;
  }
`;

export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1.5rem;

  svg {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;

    svg {
      font-size: 2.8rem;
    }
  }

  @media (max-width: 480px) {
    svg {
      font-size: 2.6rem;
    }
  }
`;
export const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: #facc15;
  margin-bottom: 12px;
`;

export const CardTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;
`;

export const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  color: white;
  transform: rotateY(180deg);
  border-radius: 20px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${/* Amount styling */ ""} & > div:first-child {
    font-size: 2.2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  ${/* Description styling */ ""}
  & > div:last-child {
    font-size: 1.25rem;
    line-height: 1.4;
  }
`;

export const CardAmount = styled.div`
  font-size: 1.4rem;
  color: #fde68a;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const CardDescription = styled.p`
  font-size: 1.25rem;
  text-align: center;
  padding: 10px 16px;
  color: transparent;
  background-image: linear-gradient(90deg, #facc15, #fcd34d);
  background-clip: text;
  -webkit-background-clip: text;

  border: 1px solid rgba(250, 204, 21, 0.15);
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  backdrop-filter: blur(6px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  font-weight: 500;
  transition: all 0.3s ease;
`;
