import styled from "styled-components";
import image from "../src/assets/IMG-0450.jpg";

const HeroPage = () => {
  return (
    <div>
      <h1>Welcome to my Portfolio!</h1>
      <BodyIntro>
        <MyImage src={image} alt="me!" />
        <BodyText>
          Hello! my name is Anthony and im a fullstack dev in training! iam
          currently learning the MERN stack at Concordia-Bootcamps
        </BodyText>
      </BodyIntro>
    </div>
  );
};

const BodyIntro = styled.div`
  margin: auto;
  display: flex;
  padding: 2em;
  width: 65%;
`;

const BodyText = styled.p`
  font-size: 1.2em;
  padding: 1em;
`;

const MyImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;
export default HeroPage;
