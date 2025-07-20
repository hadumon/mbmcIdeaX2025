import React,{useState,useEffect} from 'react'
import { Button } from '../ButtonElements';
import{
    HeroContainer,
    HeroContentWrapper,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
    TextContent,
    CountdownWrapper,
    TimeBox,
    TimeValue,TimeLabel,
    ShapeDivider
}
from './HeroElements';
import image from '../../images/desktop_bg.svg';
import JoinCard from '../JoinCard';

const HeroSection = () => {
    const [hover,setHover] = useState(false);
    const [timeLeft, setTimeLeft] = useState({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
});

useEffect(() => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 45);

  const interval = setInterval(() => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      clearInterval(interval);
      setTimeLeft({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      });
    } else {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    }
  }, 1000);

  return () => clearInterval(interval);
}, []);

    const onHover = () =>{
        setHover(!hover);
    };

  return (
    <HeroContainer bgImage={image}>
        <HeroContentWrapper>
            {/* <TextContent>
                <HeroH1>MBMC IdeaX <span id='2025'>2025</span></HeroH1>
                <HeroP>Idea X Innovation</HeroP>
                <CountdownWrapper>
                    <TimeBox>
                        <TimeValue>{timeLeft.days}</TimeValue>
                        <TimeLabel>days</TimeLabel>
                    </TimeBox>
                    <TimeBox>
                        <TimeValue>{timeLeft.hours}</TimeValue>
                        <TimeLabel>hrs</TimeLabel>
                    </TimeBox>
                    <TimeBox>
                        <TimeValue>{timeLeft.minutes}</TimeValue>
                        <TimeLabel>min</TimeLabel>
                    </TimeBox>
                    <TimeBox>
                        <TimeValue>{timeLeft.seconds}</TimeValue>
                        <TimeLabel>sec</TimeLabel>
                    </TimeBox>
                </CountdownWrapper>
                <HeroBtnWrapper>
                <Button to="/register" onMouseEnter={onHover} onMouseLeave={onHover} primary={true} smooth="true" duration={500} spy="true" exact='true' offset={-80}
                >Register Now{hover ? <ArrowForward/> : <ArrowRight/>}</Button>
                </HeroBtnWrapper>
            </TextContent> */}
            <JoinCard/>
        </HeroContentWrapper>
    <ShapeDivider>
  {/* Desktop grass shape with detailed longer blades on corners */}
  <svg
    className="desktop-shape"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 120"
    preserveAspectRatio="none"
  >
    <path
      d="M0,120 
      C20,80 40,40 60,80 
      C80,120 100,70 120,90 
      C140,110 160,70 180,90 
      C200,110 220,80 240,100 
      C260,120 280,90 300,100 
      C320,110 340,80 360,100 
      C380,120 400,90 420,100 
      C440,110 460,80 480,100 
      C500,120 520,90 540,100 
      C560,110 580,80 600,100 
      C620,120 640,90 660,100 
      C680,110 700,80 720,100 
      C740,120 760,90 780,100 
      C800,110 820,80 840,100 
      C860,120 880,90 900,100 
      C920,110 940,80 960,100 
      C980,120 1000,90 1020,100 
      C1040,110 1060,80 1080,100 
      C1100,120 1120,90 1140,100 
      C1160,110 1180,70 1200,100 
      C1220,120 1240,60 1260,100 
      C1280,140 1300,50 1320,100 
      C1340,160 1360,70 1380,100 
      C1400,130 1420,60 1440,100 
      L1440,120 L0,120 Z"
    />
  </svg>

  {/* Mobile version with smoother, simpler grass curve */}
  <svg
    className="mobile-shape"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 120"
    preserveAspectRatio="none"
  >
    <path
      d="M0,120 C360,60 1080,60 1440,120 L1440,120 L0,120 Z"
    />
  </svg>
  </ShapeDivider>
    </HeroContainer>
  )
}

export default HeroSection
