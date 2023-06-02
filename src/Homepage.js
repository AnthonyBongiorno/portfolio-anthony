import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import Navbar from "./Navbar";
import image from "../src/assets/IMG-0450.jpg";
import TechStack from "./TechStack";

const Homepage = () => {
  return (
    <div>
      <GlobalStyles />
      <Navbar />
      <MainHeader>
        <h1>Welcome to my Portfolio!</h1>
        <BodyIntro>
          <BodyText>
            Hello! my name is Anthony and im a fullstack dev in training! iam
            currently learning the MERN stack at Concordia-Bootcamps
          </BodyText>
        <MyImage src={image} alt="me!" />
        </BodyIntro>
        <div>
          <h2>My tech stack</h2>
          <TechStack />
        </div>
      </MainHeader>
    </div>
  );
};

const MainHeader = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin: 0 auto;
`;

const BodyIntro = styled.div`
  width: 30%;
  margin: auto;
`;

const BodyText = styled.p`
  font-size: 1.2em;
  padding: 1em;
`;

const MyImage = styled.img`
width: 200px;
height: 200px;
border-radius: 50%;

`
export default Homepage;
