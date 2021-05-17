import React from "react";

import styled from "styled-components";
import { motion, AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const WhoSection = () => {
  const [element, controls] = useScroll();
  return (
    <Who
      variants={scrollReveal}
      animate={controls}
      initial="show"
      ref={element}
    >
      <AnimateSharedLayout>
        <motion.h1>Who am I?</motion.h1>
        <p>
          Hello, My name is Vimalan Karunakaran, I'm a web developer based in
          Toronto
        </p>
        <p>
          and my goal is to create amazing reactive and responsive websites.
        </p>
        <p>
          When it comes to the type of designs for my website, I tend to go for
          minimalistic.
        </p>
        <p>
          I enjoy the look of simple and clean design
        </p>
        <p>
          I'm always learning a new technology as I don't like staying with the
          same old for too long.
        </p>
      </AnimateSharedLayout>
    </Who>
  );
};

const Who = styled(motion.div)`
  
  display: block;

  h1 {
    padding-bottom: 5rem;
    display: flex;
    justify-content: center;
  }
  p {
    font-size: 25px;
    text-align: center;
  }
`;

export default WhoSection;
