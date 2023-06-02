import styled from "styled-components";
import homeIcon from "../src/assets/home-button.svg";


const Navbar = () => {
  return (
    <NavDiv>
      <LinkStyle to={"/"}>
        <HomeIcon src={homeIcon} alt="Home" />
      </LinkStyle>
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
  position: sticky;
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
export default Navbar;
