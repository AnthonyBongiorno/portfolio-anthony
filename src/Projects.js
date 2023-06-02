import styled from "styled-components";
import project1 from "../src/assets/Screenshot (183).png";

const Projects = () => {
  return (
    <div id="project-section">
      <ProjectDiv>
        <h1>My Projects!</h1>
        <h2>These are some of the projects that I have done.</h2>
        <AllProjects>
          <MyProjects>
            <a href="https://github.com/AnthonyBongiorno/Dodge-The-Pikachu">
              <img src={project1} alt="dodge-the-pikachu" />
              <h1>Dodge the pikachu</h1>
            </a>
          </MyProjects>
          <MyProjects>
            <a href="">
              <h1>Coming soon!</h1>
            </a>
          </MyProjects>
        </AllProjects>
      </ProjectDiv>
    </div>
  );
};

const ProjectDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: 0 auto 200px;
  width: 75%;
  background-color: #05092e;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.3);
  h1 {
    text-align: center;
  }

  h2 {
    text-align: center;
    border-bottom: solid 3px;
    padding-bottom: 2em;
  }
`;

const AllProjects = styled.div`
  display: flex;
  justify-content: center;
`;

const MyProjects = styled.div`
  background-color: #020724;
  border-radius: 10px;
  padding: 30px;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
  margin: 0 10px;
`;

export default Projects;
