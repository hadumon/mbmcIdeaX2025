import React, { useState } from "react";

import {
  Container,
  TabsWrapper,
  Tab,
  ContentCard,
  IconCircle,
  Title,
  Description,
  RewardBox,
  TrackTitle,
} from "./TracksElements";

import { FaDoorOpen } from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";
import { FaCircleDollarToSlot, FaPeopleRoof } from "react-icons/fa6";
import { RiPlantFill } from "react-icons/ri";
import { MdOutlineModeOfTravel } from "react-icons/md";

const trackData = [
  {
    label: "Healthcare",
    icon: <GiHealthNormal />,
    description:
      "Heal the future with IdeaX. Explore the next generation of patient care, innovative medical solutions, and the cutting edge of health technology.",
    reward: "Rs. 10,000",
  },
  {
    label: "Agrotech",
    icon: <RiPlantFill />,
    description:
      "Grow the next generation of agriculture with IdeaX. Explore innovative solutions for sustainable farming, food security, and the cutting edge of agricultural technology.",
    reward: "Rs. 10,000",
  },
  {
    label: "Travel & Tourism",
    icon: <MdOutlineModeOfTravel />,
    description:
      "Journey into the next era of travel and tourism with IdeaX. Discover innovative solutions for immersive experiences, sustainable exploration, and the cutting edge of hospitality technology.",
    reward: "Rs. 10,000",
  },
  {
    label: "Cultural Identity",
    icon: <FaPeopleRoof />,
    description:
      "Shape the next chapter of cultural identity with IdeaX. Explore innovative ways to preserve heritage, promote diversity, and connect communities in the digital age.",
    reward: "Rs. 10,000",
  },
  {
    label: "Fintech",
    icon: <FaCircleDollarToSlot />,
    description:
      "Transform the next generation of finance with IdeaX. Explore innovative solutions for secure transactions, financial inclusion, and the cutting edge of digital banking.",
    reward: "Rs. 10,000",
  },
  {
    label: "Open",
    icon: <FaDoorOpen />,
    description:
      "Ignite collaboration with IdeaX. Explore open source, community-driven innovation, and the future of shared technology.",
    reward: "Rs. 10,000",
  },
];

const Tracks = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = trackData[activeIndex];
  return (
    <Container id="tracks">
      <TrackTitle>Tracks</TrackTitle>
      <TabsWrapper>
        {trackData.map((track, index) => (
          <Tab
            key={index}
            active={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          >
            {track.icon}
            <span className="tab-label">{track.label}</span>
          </Tab>
        ))}
      </TabsWrapper>

      <ContentCard>
        <div style={{ flex: 1, maxWidth: "50%" }}>
          <IconCircle>{active.icon}</IconCircle>
          <Title>{active.label}</Title>
          <Description>{active.description}</Description>
        </div>
        <RewardBox>
          <p>WINNER GETS</p>
          <h1>{active.reward}</h1>
        </RewardBox>
      </ContentCard>
    </Container>
  );
};

export default Tracks;
