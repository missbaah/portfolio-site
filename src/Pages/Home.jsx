import { About } from "../components";
import { Projects, Writing } from "../Pages";
import { illustration } from "../images";
import { Fade } from "react-reveal";
import "../App.css";

const Home = () => {
  return (
    <main>
      <Fade bottom>
        <section className="container">
          <h1 className="heading">
            Hello, I am <span className="underline pink">Adwoa</span>,{" "}
            <span className="underline blue">software developer</span> and{" "}
            <span className="underline yellow">writer</span>
          </h1>
          <img className="illustration" src={illustration} alt="animation" />
        </section>
      </Fade>
      <Fade bottom>
        <h3 className="sub-heading">About me</h3>
      </Fade>
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
