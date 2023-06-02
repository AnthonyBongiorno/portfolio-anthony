import git from "../src/assets/git.svg";
import html from "../src/assets/html-5.svg";
import css from "../src/assets/css-3.svg";
import js from "../src/assets/javascript.svg";
import node from "../src/assets/nodejs-icon.svg";
import reactTech from "../src/assets/react.svg";
import styled from "styled-components";

const TechStack = () => {
  return (
    <PngDiv>
      <TechPng src={git} alt="Git" />
      <TechPng src={html} alt="HTML" />
      <TechPng src={css} alt="CSS" />
      <TechPng src={js} alt="JavaScript" />
      <TechPng src={node} alt="NodeJS" />
      <TechPng src={reactTech} alt="React" />
    </PngDiv>
  );
};

const TechPng = styled.img`
width: 50px;
padding: 20px;
`
const PngDiv = styled.div`
display: flex;
background-color: coral;
width: 550px;
border-radius: 10px;
margin: 0 auto 200px auto;
align-content: center;
justify-content: center;
box-shadow: 0 0 100px rgba(0, 0, 0, 0.3);
`
export default TechStack;
