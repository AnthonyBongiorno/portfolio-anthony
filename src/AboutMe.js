import styled from "styled-components";
import image from "../src/assets/pexels-paras-katwal-4218883.jpg";

const AboutMe = () => {
  return (
    <div id="about-section">
      <AboutDiv>
        <AboutHeader>About me!</AboutHeader>
        <AboutDetails>
          <AboutImg src={image} alt="gaming and coding setup" />
          <p>
            Hello, my name is Anthony. I'm a passionate gamer who loves
            exploring virtual worlds and competing in multiplayer games. When
            I'm not gaming, you can find me hitting the gym, as I've recently
            become a dedicated fitness enthusiast. I believe in continuous
            self-improvement, both in my personal and professional life. I'm
            always seeking new opportunities to learn and grow, whether it's
            expanding my skill set or taking on exciting challenges. I'm excited
            to embark on new adventure into the webdev world and I cannnot wait
            to start working with a team and making cool products!
          </p>
        </AboutDetails>
      </AboutDiv>
    </div>
  );
};

const AboutDiv = styled.div`
  width: 75%;
  padding: 30px;
  margin: 0 auto 200px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background-color: #05092e;
  border-radius: 10px;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.3);
`;
const AboutDetails = styled.div`
  display: flex;
  padding: 1em;
  width: 80%;
  margin: auto;
  justify-content: space-between;
  align-items: center;

  p {
    padding: 10px;
    width: 400px;
    text-align: center;
  }
`;
const AboutHeader = styled.h1`
  margin: 1em auto;
`;
const AboutImg = styled.img`
  max-width: 50%;
  height: auto;
  border-radius: 10px;
`;

export default AboutMe;
