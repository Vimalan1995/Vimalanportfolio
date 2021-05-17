import React from "react";
import Typist from "react-typist";
import styled from "styled-components";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <Typist>
          <h1>
            My name is <Shadow>Vimalan</Shadow>
            <br></br>
            I'm an <Shadow>aspiring</Shadow>
            <br></br>
              Web <Shadow>Developer</Shadow> <Blink>_</Blink>
          </h1>
        </Typist>
      </Description>
    </About>
  );
};

const Blink = styled.span`
  animation: blink 1s step-end infinite;
  @keyframes blink {
    from,
    to {
      color: transparent;
    }
    50% {
      color: black;
    }
  }
`;

const Shadow = styled.span`
  font-weight: bold;
  color: #ff4b4b;
`;

export const About = styled(motion.div)`
  /* min-height: 90vh; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 70rem;
  padding-top: 15rem;
  overflow: hidden;

  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem 50rem;
    text-align: center;
  }
`;

const Description = styled.div`
  
  margin: auto;
`;

export default AboutSection;
