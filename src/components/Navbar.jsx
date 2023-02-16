import { Link } from "react-router-dom";
import "../assets/Navbar.css";

const Navbar = () => {
  function handleClick() {
    window.open(
      "https://docs.google.com/document/d/e/2PACX-1vQFKugE8Hp6NL3jQnK-a9tg_L_bXOPn53Wk2k6vCaNcGzOgEdG1EUjvH86mTFjzAg/pub"
    );
  }

  return (
    <section>
      <nav className="nav-bar">
        <Link className="nav-link" to="/">
          01 Home
        </Link>
        <Link className="nav-link" to="/about">
          02 About
        </Link>
        <Link className="nav-link" to="/projects">
          03 Projects
        </Link>
        <Link className="nav-link" to="/writing">
          04 Writing
        </Link>
        {/* <button onClick={handleClick} className="resume-btn">
          Resume
        </button> */}
      </nav>
    </section>
  );
};

export default Navbar;
