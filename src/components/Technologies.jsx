import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import "../assets/Technologies.css";

const Technologies = () => {
  return (
    <main className="tech-container">
      <h2>Tech-Stack</h2>
      <section className="tech-stack">
        <FontAwesomeIcon icon={faHtml5} size="6x" />
        <FontAwesomeIcon icon={faCss3} size="6x" />
        <FontAwesomeIcon icon={faJs} size="6x" />
        <FontAwesomeIcon icon={faReact} size="6x" />
        <FontAwesomeIcon icon={faVuejs} size="6x" />
      </section>
    </main>
  );
};

export default Technologies;
