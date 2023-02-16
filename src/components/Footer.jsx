import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "../App.css";

const Footer = () => {
  return (
    <main className="footer-container">
      <div className="contact-details">
        <span>
          <a href="mailTo:baahbrako@gmail.com" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </span>
        <span>
          <a></a>
          <FontAwesomeIcon icon={faGithub} />
        </span>
        <span>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </span>
        <span>
          <FontAwesomeIcon icon={faTwitter} />
        </span>
      </div>

      <div className="copyright">
        © Copyright Adwoa Baah Addo-Brako, 2023. All Rights Reserved
      </div>
    </main>
  );
};

export default Footer;
