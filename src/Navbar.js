import styled from "styled-components";
import homeIcon from "../src/assets/home-button.svg";
import githubIcon from "../src/assets/github.png";
import linkedinIcon from "../src/assets/linkedin.png";

const Navbar = () => {
  return (
    <NavDiv>
      <LinkStyle to={"/"}>
        <HomeIcon src={homeIcon} alt="Home" />
      </LinkStyle>
      <LinkStyle href="https://www.linkedin.com/in/anthony-bongiorno-b9098b242/">
        <ContactIcons src={linkedinIcon} />
      </LinkStyle>
      <GithubIconBg>
        <LinkStyle href="https://github.com/AnthonyBongiorno">
          <ContactIcons src={githubIcon} />
        </LinkStyle>
      </GithubIconBg>
      <LinkStyle to={"/about"}>About me</LinkStyle>
      <LinkStyle to={"/projects"}>My projects</LinkStyle>
      <LinkStyle to={"/contacts"}>Contact me</LinkStyle>
    </NavDiv>
  );
};

const NavDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: center;
  margin: auto;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: #05092e;
  height: 70px;
`;

const LinkStyle = styled.a`
  padding: 0 20px;
  display: flex;
  align-items: center;

  &:first-child {
    margin-right: auto;
    margin-left: 10px;
  }
`;

const HomeIcon = styled.img`
  width: 30px;
`;

const ContactIcons = styled.img`
  width: 30px;
  padding: 10px;
`;

const GithubIconBg = styled.div`
  background-color: salmon;
  display: flex;
  justify-content: center;
  align-content: center;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: auto 0;
`;
export default Navbar;
