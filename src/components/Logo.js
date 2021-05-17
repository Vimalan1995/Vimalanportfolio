import React from "react";
import styled  from "styled-components";
import { motion } from "framer-motion";
import {  fade } from "../animation";

const Logo = () => {
  return (
    <LogoSvg
      variants={fade}
      initial="hidden" animate="show"
      width="195"
      height="164"
      viewBox="0 0 195 164"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d)">
        <path
          d="M88.1217 154.549L4.80452 1.47807C4.44182 0.81172 4.92417 0 5.68284 0H36.3927C36.7658 0 37.108 0.207783 37.28 0.538921L89.8874 101.783C89.9614 101.926 90 102.084 90 102.244V154.071C90 155.108 88.6172 155.459 88.1217 154.549Z"
          fill="white"
        />
      </g>
      <g filter="url(#filter1_d)">
        <path
          d="M106.878 154.549L190.195 1.47807C190.558 0.81172 190.076 0 189.317 0H158.607C158.234 0 157.892 0.207783 157.72 0.538921L105.113 101.783C105.039 101.926 105 102.084 105 102.244V154.071C105 155.108 106.383 155.459 106.878 154.549Z"
          fill="black"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="0.681427"
          y="0"
          width="93.3186"
          height="163.073"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d"
          x="101"
          y="0"
          width="93.3186"
          height="163.073"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </LogoSvg>
  );
};

const LogoSvg = styled(motion.svg)`
  
  z-index: -1;
  display: flex;
  margin: 0 auto;
  padding-top: 1rem;
  animation: rotate 5s linear infinite;
  @keyframes rotate {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-10px);
    }
    100% {
      transform: translatey(0px);
    }
  }
`;

export default Logo;
