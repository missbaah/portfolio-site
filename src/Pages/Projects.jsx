import { GitHubPic } from "../images";
import { Project } from "../components";
import { Fade } from "react-reveal";

const Projects = () => {
  return (
    <main className="project-container">
      <Fade bottom>
        <Project name="GitHub Repo Fetch" src={GitHubPic} />
        <Project name="GitHub Repo Fetch" src={GitHubPic} />
      </Fade>
    </main>
  );
};

export default Projects;
