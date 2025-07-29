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

import { FaRobot, FaDoorOpen, FaVrCardboard } from "react-icons/fa";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { SiHomeassistant } from "react-icons/si";
import { MdOutlineModeOfTravel } from "react-icons/md";

const trackData = [
  {
    label: "AR/VR",
    icon: <FaVrCardboard />,
    description:
      "Build the future of reality with IdeaX. Explore augmented worlds, virtual experiences, and the next frontier of digital innovation.",
    reward: "Rs. 10,000",
  },
  {
    label: "IOT",
    icon: <SiHomeassistant />,
    description:
      "Dive into the interconnected world with IdeaX. Explore smart devices, data streams, and the future of ubiquitous technology.",
    reward: "Rs. 10,000",
  },
  {
    label: "Travel & Tourism",
    icon: <MdOutlineModeOfTravel />,
    description:
      "Dive into the interconnected world of travel with IdeaX. Explore intelligent platforms, real-time data streams, and the future of hyper-personalized journeys.",
    reward: "Rs. 10,000",
  },
  {
    label: "AI/ML",
    icon: <FaRobot />,
    description:
      "Innovate the intelligent future with IdeaX. Explore machine learning, deep neural networks, and the power of artificial intelligence.",
    reward: "Rs. 10,000",
  },
  {
    label: "Fintech",
    icon: <FaCircleDollarToSlot />,
    description:
      "Revolutionize the fintech with IdeaX make it secure, use intelligent frameworks and intuitive user experiences, making financial interactions seamless and empowering.",
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
