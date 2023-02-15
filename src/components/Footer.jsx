import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

const Footer = () => {
  return (
    <main className="footer-container">
      <div className="contact-details">
        <span>
          <FontAwesomeIcon icon={faArrowRight} />
          Email
        </span>
        <span>
          <FontAwesomeIcon icon={faArrowRight} />
          Github
        </span>
        <span>
          <FontAwesomeIcon icon={faArrowRight} />
          LinkedIn
        </span>
        <span>
          <FontAwesomeIcon icon={faArrowRight} />
          Twitter
        </span>
      </div>

      <div className="copyright">
        © Copyright Adwoa Baah Addo-Brako 2023. All Rights Reserved
      </div>
    </main>
  );
};

export default Footer;
