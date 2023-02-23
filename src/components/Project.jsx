import "../assets/Project.css";
import { Link } from "react-router-dom";

const Project = ({ name, src }) => {
  return (
    <section className="project">
      <div>{name}</div>
      <img className="project-pic" src={src} alt="site img" />
      <Link to="/projects/:`${name}`" className="read-more">
        Read more...
      </Link>
    </section>
  );
};

export default Project;
