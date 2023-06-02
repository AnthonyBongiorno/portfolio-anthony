import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import Navbar from "./Navbar";
import TechStack from "./TechStack";
import HeroPage from "./HeroPage";

const Homepage = () => {
  return (
    <div id="home-section">
      <GlobalStyles />
      <Navbar />
      <Wrapper>
        <MainHeader>
          <HeroPage />
          <div>
            <h2>My tech stack</h2>
            <TechStack />
          </div>
        </MainHeader>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  width: 75%;
  margin: 4em auto;
  border-radius: 1em;
  padding: 30px 0;
`;

const MainHeader = styled.div`
  width: 95%;
  padding: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin: 0 auto;
  background-color: #05092e;
  border-radius: 10px;
`;

export default Homepage;
