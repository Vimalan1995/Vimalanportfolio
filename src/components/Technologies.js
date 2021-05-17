import React from "react";

import styled from "styled-components";
import { motion, AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";
//icons
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaPython,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiRedux, SiFlask } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const Technology = () => {
  const [element, controls] = useScroll();
  return (
    <Tech
      variants={scrollReveal}
      animate={controls}
      initial="show"
      ref={element}
    >
      <AnimateSharedLayout>
        <motion.h1>Technologies I use</motion.h1>
        <Cards>
          <Card>
            <div className="icon">
              <FaReact size="5em" color=" #1dd2ff" />
              <h3>React</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <SiRedux size="5em" color=" #d23bf8" />
              <h3>Redux</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <FaHtml5 size="5em" color=" #eb8511" />
              <h3>HTML5</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <FaCss3 size="5em" color=" #1b66f0" />
              <h3>CSS3</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <FaPython size="5em" color=" #0f0f0f" />
              <h3>Python</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <FaNodeJs size="5em" color=" #179c05" />
              <h3>Node.js</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <FaGithub size="5em" color=" #000000" />
              <h3>GitHub</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <SiFlask size="5em" color=" #030303" />
              <h3>Flask</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <DiMongodb size="5em" color="#78c544f" />
              <h3>MongoDB</h3>
            </div>
          </Card>
        </Cards>
      </AnimateSharedLayout>
    </Tech>
  );
};

const Tech = styled(motion.div)`
  padding-top: 50rem;
  padding-bottom: 40rem;
  h1 {
    display: flex;
    justify-content: center;
    padding-bottom: 5rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;

      padding: 1rem;
    }
  }
`;

export default Technology;
