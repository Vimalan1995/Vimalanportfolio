import React from "react";
import { motion } from "framer-motion";

//page components
import AboutMe from "../components/AboutMe";
import WhoAmI from "../components/WhoAmI";
import Technology from "../components/Technologies";
import ScrollTop from "../components/ScrollTop";
import Wave from "../components/Wave";

const About = () => {
  return (
    <motion.div>
      <Wave />
      <AboutMe />
      <WhoAmI />
      <Technology />
      <ScrollTop />
    </motion.div>
  );
};

export default About;
