import { profilepic } from "../images";
import { Technologies } from "./index";
import { Fade } from "react-reveal";
import "../App.css";

const About = () => {
  return (
    <main>
      <Fade bottom>
        <section className="about-container">
          <div>
            <img className="profilePic" src={profilepic} alt="Adwoa" />
            <span>
              <button>Contact Me</button>
              <button>Down Resume</button>
            </span>
          </div>

          <article>
            <div className="text">
              Hello 👋, I'm Adwoa (arr-ju-aa) Baah Addo-Brako, a self taught
              front-end developer
            </div>
            <div className="text">
              I enjoy building responsive and accessible websites using a mobile
              first approach.
            </div>
            <div className="text">
              Currently open to Junior Developer roles and internships. Thank
              you for visiting my portfolio!
            </div>
            <Technologies />
          </article>
        </section>
      </Fade>
    </main>
  );
};

export default About;
