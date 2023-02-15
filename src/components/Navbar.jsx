import { Link } from "react-router-dom";
import { logo } from "../images";
import "../assets/Navbar.css"

const Navbar = () => {
  function handleClick() {
    window.open(
      "https://docs.google.com/document/d/e/2PACX-1vQFKugE8Hp6NL3jQnK-a9tg_L_bXOPn53Wk2k6vCaNcGzOgEdG1EUjvH86mTFjzAg/pub"
    );
  }

  return (
    <section>
        <img className="logo" src={logo} alt="logo" />
      <nav className="nav-bar">
        <Link className="nav-link" to="/">
          01 Home
        </Link>
        <Link className="nav-link" to="/projects">
          02 Projects
        </Link>
        <Link className="nav-link" to="/writing">
          03 Writing
        </Link>
        <button onClick={handleClick} className="resume-btn">
        Resume
      </button>
      </nav>
    </section>
  );
};

export default Navbar;
