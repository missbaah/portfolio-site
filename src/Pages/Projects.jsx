import { GitHubPic } from "../images";
import { Project } from "../components";
import { Fade } from "react-reveal";

const Projects = () => {
  return (
    <main className="project-container">
      <Fade bottom>
        <Project
          name="GitHub Repo Fetch"
          src={GitHubPic}
          livesite="https://missbaahsgithubsite.netlify.app/"
          github="https://github.com/missbaah/Github-API-Fetch"
        />
        <Project
          name="GitHub Repo Fetch"
          src={GitHubPic}
          livesite="https://missbaahsgithubsite.netlify.app/"
          github="https://github.com/missbaah/Github-API-Fetch"
        />
      </Fade>
    </main>
  );
};

export default Projects;
