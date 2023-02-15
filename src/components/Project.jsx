import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import "../assets/Project.css";

const Project = ({ name, livesite, github, src }) => {
  return (
    <section className="project">
      <div>{name}</div>
      <img src={src} alt="site img" />
      <div className="links">
        <a href={livesite} target="_blank" rel="noreferrer">
          Live Site
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
        <a href={github} target="_blank" rel="noreferrer">
          GitHub
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </div>
    </section>
  );
};

export default Project;
