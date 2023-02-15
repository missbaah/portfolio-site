import { GitHubPic } from "../images";
import { Project } from "../components";

const Projects = () => {
  return (
    <main className="project-container">
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
    </main>
  );
};

export default Projects;
