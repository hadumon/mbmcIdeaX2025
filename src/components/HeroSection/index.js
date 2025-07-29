import React, { lazy, Suspense, useState, useEffect } from "react";
import {
  HeroContainer,
  HeroContentWrapper,
  ShapeDivider,
} from "./HeroElements";
import image from "../../images/desktop_bg.svg";
import { useInView } from "react-intersection-observer";

// Lazy load JoinCard
const JoinCard = lazy(() => import("../JoinCard"));

const HeroSection = () => {
  const [bgLoaded, setBgLoaded] = useState(false);

  // Intersection observer for JoinCard
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Preload background image
  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => setBgLoaded(true);
  }, []);

  return (
    <HeroContainer bgImage={bgLoaded ? image : null}>
      <HeroContentWrapper>
        <div ref={ref}>
          {inView && (
            <Suspense fallback={<div>Loading...</div>}>
              <JoinCard />
            </Suspense>
          )}
        </div>
      </HeroContentWrapper>

      <ShapeDivider>
        {/* Desktop SVG */}
        <svg
          className="desktop-shape"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
        >
          <path
            d="M0,150
       C10,130 20,100 30,130
       C40,160 50,90 60,130
       C70,170 90,100 100,130
       C110,160 130,100 140,130
       C150,170 160,100 180,130
       C190,160 200,90 220,130
       C230,160 250,90 270,130
       C280,170 300,90 320,130
       C340,170 360,100 380,130
       C400,160 420,90 440,130
       C460,170 480,100 500,130
       C520,160 540,90 560,130
       C580,170 600,100 620,130
       C640,170 660,100 680,130
       C700,160 720,90 740,130
       C760,160 780,90 800,130
       C820,170 840,100 860,130
       C880,160 900,100 920,130
       C940,170 960,100 980,130
       C1000,160 1020,90 1040,130
       C1060,170 1080,100 1100,130
       C1120,160 1140,100 1160,130
       C1180,170 1200,100 1220,130
       C1240,160 1260,90 1280,130
       C1300,170 1320,100 1340,130
       C1360,160 1380,100 1400,130
       C1420,170 1430,100 1440,130
       L1440,150 L0,150 Z"
            fill="#041322"
          />
        </svg>

        {/* Mobile SVG */}
        <svg
          className="mobile-shape"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path d="M0,120 C360,60 1080,60 1440,120 L1440,120 L0,120 Z" />
        </svg>
      </ShapeDivider>
    </HeroContainer>
  );
};

export default HeroSection;
