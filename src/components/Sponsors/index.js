import React from "react";
import {
  Section,
  MainTitle,
  SubTitle,
  SponsorsWrapper,
  SponsorLogo,
} from "./sponsorElements";

// Sponsor logos
import MBM from "../../images/sponsors/mbmlogo_white.png";

const SponsorsSection = () => {
  return (
    <Section>
      <MainTitle>Our Sponsors</MainTitle>
      <SubTitle>Platinum Sposnors</SubTitle>
      <SponsorsWrapper>
        <a
          href="https://www.mbmc.edu.np/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SponsorLogo src={MBM} alt="MBMC LOGO" />
        </a>
      </SponsorsWrapper>
    </Section>
  );
};

export default SponsorsSection;
