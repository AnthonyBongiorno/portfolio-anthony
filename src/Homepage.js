import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

const Homepage = () => {
  return (
    <div>
      <GlobalStyles />
      <MainHeader>
        <h1>Welcome to my Portfolio</h1>
        {/* Add other components or content here */}
      </MainHeader>
    </div>
  );
};

const MainHeader = styled.div`
  text-align: center;
  border-bottom: 2px white solid;
`;

export default Homepage;
