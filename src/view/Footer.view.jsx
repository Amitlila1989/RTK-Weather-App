import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Box>
      <a
        href="https://www.linkedin.com/in/amit-lila-588971268/"
        target="_blank"
        rel="noopener noreferrer"
      >
        MyLinkedinProfile.io
      </a>
      &nbsp; learn and thrive &nbsp;
    </Box>
  );
};
export default Footer;

const Box = styled.footer`
border: 2px deeppink solid;
  width: 100%;
  min-height: 50px;
  border-top: 1px solid #eaeaea;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  text-decoration: none;
//   margin-top: auto;
`;