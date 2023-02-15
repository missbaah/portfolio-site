import { profilepic } from "../images";
import { Technologies } from "./index";
import "../App.css";

const About = () => {
  return (
    <main>
      <h1 className="about-title">About Me</h1>
      <section className="about-container">
        <div>
          <img className="profilePic" src={profilepic} alt="Adwoa" />
        </div>

        <article>
          <div className="text">
            Hey, my full name is Adwoa (arr-ju-aa) Baah Addo-Brako and I have
            been self-learning web development for over a year now
          </div>
          <div className="text">
            I enjoy the process of creating be it through writing or sewing and
            web development is no different. All excited to our ever-growing web
            economy.
          </div>
          <div className="text">
            Currently looking for Junior Developer roles and internships. Please
            take a look at my portfolio and do not hesitate to contact me if you
            have any questions or opportunities. Thank you for visiting my
            portfolio!
          </div>
        </article>
      </section>
      <Technologies />
    </main>
  );
};

export default About;
