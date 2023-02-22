import { profilepic } from "../images";
import { Technologies } from "./index";
import { Fade } from "react-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

const About = () => {
  return (
    <main>
      <Fade bottom>
        <section className="about-container">
          <div className="img-container">
            <img className="profilePic" src={profilepic} alt="Adwoa" />
            <span className="btn">
              <button>Contact Me</button>
              <button>
                <FontAwesomeIcon icon={faDownload} /> Resume
              </button>
            </span>
          </div>

          <article>
            <h2>About Me</h2>
            <p className="text">
              Hello 👋, I'm Adwoa (arr-ju-aa) Baah Addo-Brako, a developer with
              a frondend focus located in Ghana. My developer journey started a
              year into my Masters of Architecture program in KNUST through
              freeCodeCamp and making small, wanky css panda animations.
            </p>
            <p className="text">
              At the beginning of 2022, I joined the Wentors mentorship program
              for 3 months after which I gained admission with Alt School Africa
              to study Frontend Engineering and I have been building ever since !
            </p>
            <p className="text">
              I am enthusiastic about joining the tech industry. Currently open
              to Junior Developer roles and internships. Thank you for visiting
              my portfolio!
            </p>
            <br />
            <Technologies />
          </article>
        </section>
      </Fade>
    </main>
  );
};

export default About;
