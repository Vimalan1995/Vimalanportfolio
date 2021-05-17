import React from "react";

//animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";
//icons
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

const Info = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Title>
        <Hide>
          <motion.h1 variants={titleAnim}>Get in touch.</motion.h1>
        </Hide>
      </Title>

      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <a href="https://www.linkedin.com/in/vimalan-karuna/">
              <p>
                <FaLinkedin />
                Linkedin
              </p>
            </a>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <p>
              <BiMailSend /> vimalan.karuna@gmail.com
            </p>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <a href="https://github.com/Vimalan1995">
              <p>
                <FaGithub /> Github
              </p>
            </a>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;

  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
  p {
    font-size: 50px;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
  margin-right: 4rem;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
  text-align: center;
`;

export default Info;
