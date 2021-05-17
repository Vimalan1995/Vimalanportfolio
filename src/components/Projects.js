import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
//animations
import { popup } from "../animation";
//images
import Ignite from "../img/Ignite.png";
import Music from "../img/Music.png";
import Port from "../img/port.png";

const Projects = () => {
  return (
    <ProjectCards>
      <a href="https://vimalan1995.github.io/IgniteSearch/">
        <StyledCard variants={popup} initial="hidden" animate="show">
          <motion.h2>Ignite Project</motion.h2>
          <br></br>
          <p>
            <b>Description:</b> A website where you can search the latest
            video games
          </p>
          <p><b>Technology Used: </b> React, Redux, Axios, CSS3, HTML5, Framer-Motion, React-Router, Styled-Components</p>
          <motion.img src={Ignite} alt="" />
        </StyledCard>
      </a>
      <a href="https://vimalan1995.github.io/MangoMusic/">
        <StyledCard variants={popup} initial="hidden" animate="show">
          <motion.h2>Music Player</motion.h2>
          <p>
          <b>Description:</b> Online Music Player
          </p>
          <p><b>Technology Used:</b> React, SASS, HTML5</p>
          <motion.img src={Music} alt="" />
        </StyledCard>
      </a>
      <a href="http://Vimalan1995.github.io/portfolio">
        <StyledCard variants={popup} initial="hidden" animate="show">
          <motion.h2>Website Portfolio</motion.h2>
          <p>
          <b>Description:</b> Portfolio/Business Website
          </p>
          <p><b>Technology Used: </b>React, CSS3, HTML5, Framer-Motion, React-Router, Styled-Components</p>
          <motion.img src={Port} alt="" />
        </StyledCard>
        <br></br>
        <h1>More Coming Soon...</h1>
      </a>
    </ProjectCards>
  );
};

const ProjectCards = styled(motion.div)`
  padding: 1rem;
  min-height: 60vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

const StyledCard = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
  }
`;

export default Projects;
