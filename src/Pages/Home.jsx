import { About } from "../components";
import { Projects, Writing } from "../Pages";
import { illustration, profilepic } from "../images";
import { Fade } from "react-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faA, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

const Home = () => {
  return (
    <main>
      <Fade bottom>
        <section className="container">
          <h1 className="heading">
            Hello, I am <span className="underline pink">Adwoa</span>,{" "}
            <span className="underline blue">frontend developer</span> and{" "}
            <span className="underline yellow">writer</span>
          </h1>
          <img className="profile-pic" src={illustration} alt="animation" />
        </section>
      </Fade>
      <Fade bottom>
        <div className="scroll-down">
          <FontAwesomeIcon className="slide-bottom" icon={faArrowDown} /> Scroll
          down
        </div>
      </Fade>
      {/* <Fade bottom>
        <h3 className="sub-heading">About me</h3>
      </Fade> */}
      <About />
      <Fade bottom>
        <h3 className="sub-heading">Here are some projects I've worked on</h3>
      </Fade>
      <Fade right>
        <Projects />
      </Fade>
      <Fade bottom>
        <h3 className="sub-heading">Check out my writing</h3>
      </Fade>
      <Fade left>
        <Writing />
      </Fade>
    </main>
  );
};

export default Home;
