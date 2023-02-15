import { About, Footer } from "../components";
import { illustration } from "../images";
import "../App.css";

const Home = () => {
  return (
    <>
      <section className="container">
        <h1 className="heading">
          Hello, I am Adwoa, software developer and writer
          <div className="vector1"></div>
          <div className="vector2"></div>
          <div className="vector3"></div>
        </h1>
        <img className="illustration" src={illustration} alt="animation" />
      </section>

      <About />
      <Footer />
    </>
  );
};

export default Home;
