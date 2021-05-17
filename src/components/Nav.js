import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <Styled>
      <ul>
        <li>
          <Link style={{ textDecoration: "none", color:" black" }} to="/">
            About Me
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none", color:" black" }} to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none", color:" black" }} to="/contact Me">
            Contact Me
          </Link>
        </li>
      </ul>
    </Styled>
  );
};

const Styled = styled.nav`
  /* min-height: 1vh; */
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  padding-right: 25rem;
  
  color: black;
  position: sticky;
  top: 0;
  z-index: 1;
  flex-direction: column;

  ul {
    display: flex;
    list-style: none;
    
  }
  li {
    padding-left: 25rem;
    position: relative;
    font-size: 20px;
    font-weight: lighter;
  }

  @media (max-width: 1600px) {
    padding: 1rem;
    ul {
      /* padding: 2rem; */
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;

export default Nav;
