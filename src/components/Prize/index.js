import { motion, useAnimation } from "framer-motion";
import { useState, useEffect, useRef } from "react";

import {
  CardGrid,
  FlipCard,
  CardInner,
  CardFront,
  CardBack,
  IconWrapper,
  CardTitle,
  CardAmount,
  CardDescription,
  SectionTitle,
} from "./prizeElements";
import { FaTrophy, FaRocket, FaGift, FaSmile } from "react-icons/fa";

const MotionCardGrid = motion(CardGrid);

const prizes = [
  {
    id: 1,
    icon: <FaTrophy />,
    title: "The Ultimate Trophy",
    amount: "Rs. 50,000",
    description: "Overall Champion",
  },
  {
    id: 2,
    icon: <FaRocket />,
    title: "Track Winner",
    amount: "Rs. 10,000",
    description: "Brand New Track Added!",
  },
  {
    id: 3,
    icon: <FaGift />,
    title: "Swags & Freebies",
    amount: "🎁 Surprise Inside",
    description: "Unlock exclusive goodies!",
  },
  {
    id: 4,
    icon: <FaSmile />,
    title: "Gifts for All!",
    amount: "🎉 Everyone Wins!",
    description: "Surprise merch & goodies for everyone",
  },
];

const Prize = () => {
  const iconControls = useAnimation();
  const [hasEntered, setHasEntered] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!hasEntered) return;

    console.log("Animation started");

    const startAnimation = async () => {
      try {
        await iconControls.start({
          scale: [1, 1.3, 1],
          rotate: [0, 10, -10, 0],
          transition: {
            duration: 0.6,
            ease: "easeInOut",
          },
        });
      } catch (error) {
        console.error("Animation error:", error);
      }
    };

    startAnimation();

    intervalRef.current = setInterval(startAnimation, 2000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [hasEntered, iconControls]);

  const handleViewportEnter = () => {
    console.log("Viewport entered");
    setHasEntered(true);
  };

  return (
    <>
      <SectionTitle>Prizes</SectionTitle>
      <MotionCardGrid
        onViewportEnter={handleViewportEnter}
        viewport={{ once: true, amount: 0.3 }}
      >
        {prizes.map(({ id, icon, title, amount, description }) => (
          <FlipCard key={id}>
            <CardInner>
              <CardFront>
                <motion.div
                  animate={iconControls}
                  style={{
                    display: "inline-block",
                    transformOrigin: "center",
                  }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 },
                  }}
                >
                  <IconWrapper>{icon}</IconWrapper>
                </motion.div>
                <CardTitle>{title}</CardTitle>
              </CardFront>
              <CardBack>
                <CardAmount>{amount}</CardAmount>
                <CardDescription>{description}</CardDescription>
              </CardBack>
            </CardInner>
          </FlipCard>
        ))}
      </MotionCardGrid>
    </>
  );
};

export default Prize;
